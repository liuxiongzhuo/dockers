#! sh
nohup ./sing-box-1.11.4-linux-amd64/sing-box run -c ./config.json &
nohup ./c tunnel --protocol http2 --url tcp://127.0.0.1:5353  & 
sleep 5
./web