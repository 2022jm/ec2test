#!/bin/bash
# Software Installation

echo; echo -e "\e[1;35m + SOFTWARE INSTALLATION \e[0m"; 
echo -ne "\e[1;35m |_ Starting ************************************************************************************************************* \e[0m"; echo ""

# Install Node.js and npm via NodeSource PPA
sudo curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh
sudo bash /tmp/nodesource_setup.sh
sudo apt-get install -y nodejs

# Install Angular CLI
sudo npm install -g @angular/cli
sudo npm install -g npm@9.6.5
sudo npm install -g @angular/cli@10

# Install required packages for building native Node.js modules
sudo apt-get -y install build-essential

# Clean up unused packages and cached files
sudo apt autoremove -y && sudo apt clean
exit 0