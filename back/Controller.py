from fastapi import FastAPI, APIRouter, status, HTTPException, Request
from fastapi.responses import ORJSONResponse
from typing import Dict
from fastapi.middleware.cors import CORSMiddleware
import subprocess
import json
import re
import requests

router = APIRouter(tags=["Demo"], default_response_class=ORJSONResponse)

@router.post(
    path="/verify-mail",
    status_code=status.HTTP_200_OK,    
    responses={
        status.HTTP_200_OK: {
            "description": "this is hello world",
        },
        status.HTTP_500_INTERNAL_SERVER_ERROR: {
            "description": "Internal server error"
        }
    }
)

async def verify_mail(request: Request):
    data = await request.json()
    result = subprocess.run(['/root/.local/bin/ghunt', 'email', data['email']], capture_output=True, text=True)
    print(result.stdout)
    user_info = parse_ghunt_output(result.stdout)
    try:
        return ORJSONResponse(
                status_code=status.HTTP_200_OK,
                content=user_info                   
            )
        
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )
    
def parse_ghunt_output(output):
    data = {}

    # Googleアカウントのプロフィール画像URLを抽出
    img_url_match = re.search(r"https://lh3.googleusercontent.com/[^\s]+", output)
    print(img_url_match)
    if img_url_match:
        data["img"] = img_url_match.group()

    # GoogleマップのプロフィールページURLを抽出
    profile_url_match = re.search(r"https://www.google.com/maps/contrib/[^\s]+", output)
    if profile_url_match:
        data["profile"] = profile_url_match.group()
    
    mailaddress_match = re.search(r"[a-zA-Z0-9._%+-]+@gmail\.com", output)
    if mailaddress_match:
        data["email"] = mailaddress_match.group()
    
    print(data)
        

# URLからHTMLを取得
    response = requests.get(data["profile"])
    html = response.text

    # 正規表現を使用してmetaタグを検索
    pattern = r'<meta\s+content="Contributions by\s+([^"]+)"\s+itemprop="name">'
    match = re.search(pattern, html)

    # "米倉順子"だけを取り出す
    if match:
        name = match.group(1)
        data["name"] = name
        print(data["name"])
        
    else:
        print("指定されたmetaタグが見つかりませんでした。")
        
    return data