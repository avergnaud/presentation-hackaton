#!/bin/sh

export GOOGLE_APPLICATION_CREDENTIALS=/home/ubuntu/dev3/pilotage_voix/kk-orders-speech-to-text-fd932edbb78d.json

/home/ubuntu/dev3/pilotage_voix/speech_to_orders/venv/bin/python3.5 /home/ubuntu/dev3/pilotage_voix/speech_to_orders/src/main_ws.py

#python3 /home/ubuntu/dev3/pilotage_voix/speech_to_orders/src/main_ws.py
