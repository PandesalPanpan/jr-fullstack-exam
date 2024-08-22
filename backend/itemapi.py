from fastapi import APIRouter, Path, Depends
from fastapi.security import OAuth2PasswordBearer

from items_data import items
from item_model import Item, UpdateItem
from auth import verify_token, oauth2_scheme

router = APIRouter()

def get_current_user(token: str = Depends(oauth2_scheme)):
    return verify_token(token)

@router.get("/items")
def get_items(current_user: str = Depends(get_current_user)):
    return items

@router.get("/items/{item_id}")
def get_item(item_id: int = Path(..., description="The ID of the item to retrieve")):
    item = items.get(item_id)
    if item is None:
        return {"error": "Item not found"}
    item_with_id = {"id": item_id, **item}
    return item_with_id

@router.post("/create-item")
def create_item(item: Item):
    if items:
        last_item_id = max(items.keys())
        item_id = last_item_id + 1
    else:
        item_id = 1
    item = item.model_dump()
    item["id"] = item_id
    items[item_id] = item
    return items[item_id]

@router.put("/update-items/{item_id}")
def update_item(item_id: int, item: UpdateItem):
    if item_id not in items:
        return {"error": "Item not found"}
    
    if item.name is not None:
        items[item_id]["name"] = item.name

    if item.description is not None:
        items[item_id]["description"] = item.description

    if item.price is not None:
        items[item_id]["price"] = item.price

    return items[item_id]

@router.delete("/delete-items/{item_id}")
def delete_item(item_id: int):
    if item_id not in items:
        return {"error": "Item not found"}
    
    del items[item_id]
    return {"message": "Item deleted successfully"}