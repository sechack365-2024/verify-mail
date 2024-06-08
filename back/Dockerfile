FROM python:3.9.16-buster

ENV TZ Asia/Tokyo

WORKDIR /usr/src/app

COPY back/requirements.txt ./

#RUN pip install --no-cache-dir -r requirements.txt
RUN pip install --upgrade pip && \
    pip install -r requirements.txt


COPY . .

CMD ["bash", "-c", "uvicorn main:app --reload --host 0.0.0.0 --port 8000"]