#!/bin/bash

# Update package lists
echo; echo -e "\e[1;35m + SERVER PATCHING \e[0m"; 
echo -ne "\e[1;35m |_ Starting ************************************************************************************************************* \e[0m"; echo ""
sudo apt-get update

# Upgrade installed packages to the latest version
sudo apt-get -y upgrade

# Install security updates and remove obsolete packages
sudo apt-get -y dist-upgrade
exit 0