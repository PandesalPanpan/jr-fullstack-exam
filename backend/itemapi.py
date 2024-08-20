from fastapi import FastAPI, Path
from items_data import items
from item_model import Item, UpdateItem

app = FastAPI()

@app.get("/items")
def get_items():
    return items

@app.post("/items")
def create_item(item: Item):
    item_id = len(items) + 1
    items[item_id] = item
    return items[item_id]

@app.get("/items/{item_id}")
def get_item(item_id: int = Path(..., description="The ID of the item to retrieve")):
    return items.get(item_id)

@app.put("/items/{item_id}")
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

@app.delete("/items/{item_id}")
def delete_item(item_id: int):
    if item_id not in items:
        return {"error": "Item not found"}
    
    del items[item_id]
    return {"message": "Item deleted successfully"}