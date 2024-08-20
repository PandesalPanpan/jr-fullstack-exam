from pydantic import BaseModel, Field
from typing import Optional

class Item(BaseModel):
    name: str = Field(..., min_length=1, description="The name must not be empty")
    description: Optional[str] = None
    price: float = Field(..., gt=0, description="The price must be greater than 0")

# Model for updating an item
class UpdateItem(BaseModel):
    name: Optional[str] = Field(None, min_length=1, description="The name must not be empty")
    description: Optional[str] = None
    price: Optional[float] = Field(None, gt=1, description="The price must be greater than 1 if provided")