#!/bin/bash

# Display the server information
echo; echo -e "\e[1;35m + SERVER INFORMATION \e[0m"
echo -ne "\e[1;35m |_ Starting ************************************************************************************************************* \e[0m"; echo ""
echo -ne "\e[1;35m |_ Server Name: \e[0m"; echo "$(hostname)"
echo -ne "\e[1;35m |_ Uptime: \e[0m"; echo "$(uptime)"
echo -ne "\e[1;35m |_ Date: \e[0m"; echo "$(date)"
echo -ne "\e[1;35m |_ Operating System: \e[0m"; echo "$(lsb_release -d | awk '{print $2, $3}')"
echo -ne "\e[1;35m |_ Operating System Version: \e[0m"; echo "$(lsb_release -r | awk '{print $2}')"
echo -ne "\e[1;35m |_ Kernel Version: \e[0m"; echo "$(uname -r)"
# Display the package names and versions
echo "";
echo -e "\e[1;35m + SOFTWARE INSTALLATION \e[0m"
echo -ne "\e[1;35m |_ Node.JS: \e[0m"; echo "$(node -v)"
echo -ne "\e[1;35m |_ npm: \e[0m"; echo "$(npm -v)"
echo -ne "\e[1;35m |_ Angular: \e[0m"; echo "$(ng --version | grep "Angular CLI")"
echo -ne "\e[1;35m |_ Build-essential: \e[0m"; echo "$(dpkg -s build-essential | grep Version)"
echo ""; echo ""
exit 0