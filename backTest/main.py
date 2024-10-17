

""" from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "Hello World"} """

""" from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["GET", "POST"],  
    allow_headers=["*"],  
)

class User(BaseModel):
    name: str
    email: str
    password: str

@app.post("/register")
async def register_user(user: User):
    print("Received user registration:", user)
    return {"message": "User registered successfully"}
 """
import os
from fastapi.responses import FileResponse
from fastapi import FastAPI,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict
app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.get("/events")
def get_events():
    return [
        {"title": "Событие 1", "start": "2024-03-28T10:00:00", "end": "2024-03-28T12:00:00", "allDay": False},
        {"title": "Come to 504 room", "start": "2024-03-29", "allDay": True},
        {"title": "Событие 3", "start": "2024-03-28T14:00:00", "end": "2024-03-28T17:00:00", "allDay": False},
        {"title": "Событие 300", "start": "2024-03-28T18:00:00", "end": "2024-03-28T19:00:00", "allDay": False},
        {"title": "Conferation", "start": "2024-04-12", "allDay": True},
    ]
@app.get("/suggested_events")
def get_suggested_events():
    return [
        {"title": "Предложенное Событие 1", "start": "2024-04-10T10:00:00", "end": "2024-04-10T12:00:00", "allDay": False},
        {"title": "Предложенное Событие 2", "start": "2024-04-11", "allDay": True},
        {"title": "Запись", "start": "2024-04-11T8:00:00", "end": "2024-04-11T9:00:00", "allDay": False},
    ]

@app.post("/events/{title}/accept")
def accept_event(title: str):
    print(f"accept: title: {title}")

    return {"message": "Event accepted", "title": title}

@app.post("/events/{title}/reject")
def reject_event(title: str):
    print(f"reject: title: {title}")
   
    return {

        "message": "Event rejected", "title": title
        
        }

from pydantic import BaseModel

class Patient(BaseModel):
    name: str
    id:   str 
    city: str

patients_data = [
    {"id": "123", "name": "SpongeBob SquarePants", "city": "Bikini Bottom"},
    {"id": "124", "name": "Patrick", "city": "Bikini Bottom"},
    {"id": "125", "name": "Squidward", "city": "Bikini Bottom"}
]

# ссловарь с файлами, связаными с каждым пациентом
patient_files = {
    "123": ["file1.pdf", "file2.pdf", "file3.pdf", "file.pdf"],
    "124": ["file3.pdf", "file4.pdf"],
    "125": ["file5.pdf", "file6.pdf"]
}

@app.get("/recent_patients", response_model=List[Patient])
def get_recent_patients():
    """
    Возвращает список последних пациентов с их именами и городами.
    """
    return patients_data

@app.get("/patient_files/{patient_id}")
def get_patient_files(patient_id: str) -> List[str]:
    """
    Возвращает список названий PDF-файлов, связанных с пациентом по его id.
    """
    files = patient_files.get(patient_id)
    if files is None:
        raise HTTPException(status_code=404, detail="Patient not found or has no associated files.")
    return files


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PDF_DIRECTORY = os.path.join(BASE_DIR, '..', 'pdf_files')

class PDFRequest(BaseModel):
    user_id: str
    filename: str

@app.get("/download_pdf/{patient_id}/{filename}")
def download_pdf(patient_id: str, filename: str):
    """
    Загружает PDF-файл по названию и идентификатору пациента.
    """
    # Генерирую тут полный путь к PDF-файлу
    pdf_path = os.path.join(PDF_DIRECTORY, filename)

    # Проверяем, существует ли файл
    if not os.path.isfile(pdf_path):
        raise HTTPException(status_code=404, detail="PDF file not found")



    # Возвращаем файл в качестве ответа
    return FileResponse(path=pdf_path, media_type='application/pdf', filename=filename)

print(f"PDF_DIRECTORY:{PDF_DIRECTORY}")
