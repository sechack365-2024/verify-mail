from fastapi import APIRouter, status, HTTPException
from fastapi.responses import ORJSONResponse
from typing import Dict


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
