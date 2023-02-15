#!/bin/bash
#You can start this script at startup by adding to crontab
#@reboot sh /path/to/linuxdyndns.sh

if [ -z "$1" ]; then
  echo "Error: first argument must be host"
  exit 1
fi
HOST=$1

if [ -z "$3" ]; then
  echo "Error: second argument must be domain"
  exit 1
fi
DOMAIN=$2

if [ -z "$3" ]; then
  echo "Error: third argument must be password"
  exit 1
fi
PASSWORD=$3

if [ -z "$4" ]; then
  echo "Error: fourth argument must be interval in minutes"
  exit 1
fi
INTERVAL=$4

dns_ip=$(dig $HOST.$DOMAIN +short) #Check the registered IP in DNS
echo "Started dydns daemon. Current DNS IP is $dns_ip"

while true
do
    public_ip=$(dig TXT +short o-o.myaddr.l.google.com @ns1.google.com|awk -F'"' '{print $2}') #Check Public IP
    echo "Public IP is $public_ip"
    if [ "$public_ip" != "$dns_ip" ]
    then
        echo "IPs are different, calling dydns"
        curl "https://dynamicdns.park-your-domain.com/update?host=$HOST&domain=$DOMAIN&password=$PASSWORD&ip=$public_ip"
        
        echo "Done. Waiting 300 seconds."
        sleep 300 #Allow the DNS server to update
        
        dns_ip=$(dig $HOST.$DOMAIN +short) #Check the new IP and use new IP to compare to current IP
        echo "Finished waiting, current DNS IP is $dns_ip"
    else
        echo "IP has not changed"
    fi
    sleep $(($INTERVAL*60))
done
