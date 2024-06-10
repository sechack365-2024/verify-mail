from fastapi import FastAPI, APIRouter, status, HTTPException, Request
from fastapi.responses import ORJSONResponse
from typing import Dict
from fastapi.middleware.cors import CORSMiddleware
import subprocess

router = APIRouter(tags=["Demo"], default_response_class=ORJSONResponse)

@router.get(
    path="/new",
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

async def new():
    try:        
        return ORJSONResponse(
                status_code=status.HTTP_200_OK,
                content=(
                    {
                        "message": f"はろー"
                    }
                )
            )
        
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )

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
    try:
        return ORJSONResponse(
                status_code=status.HTTP_200_OK,
                content=(
                    {
                        "message": f"はろー",                        
                        "result": result.stdout
                    }
                )
            )
        
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )