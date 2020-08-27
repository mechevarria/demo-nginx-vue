#!/usr/bin/env bash

api_url=https://api.cf.us10.hana.ondemand.com
username=$CP_USER
password=$CP_PASSWORD
org=ns2-presales
space=mechevarria

cf login -a $api_url -u $username -p $password -o $org -s $space
