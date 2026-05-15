#!/bin/bash

set -e

echo "Iniciando deploy..."

cd ~/ProyectosBackend/testAPI-Hotel-Vista-al-Mar-y-Arena

echo "Actualizando repositorio..."
git pull origin main

echo "Reconstruyendo containers..."
docker compose up -d --build

echo " Estado containers:"
docker ps

echo "Deploy succsessful!"