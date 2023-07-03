#!/bin/bash
# Hardening Linux Server

# Finding ID V-238347 | Version UBTU-20-010426 | Rule ID SV-238347r654216_rule | Severity Medium
  echo; echo -e "\e[1;35m + O.S HARDENING \e[0m"
  echo -ne "\e[1;35m |_ Starting ************************************************************************************************************* \e[0m"; echo ""
  echo -ne "\e[1;35m |_ SEVERITY MEDIUM \e[0m"; echo ""
  echo -e "\e[1;35m   |_ ID V-238347: The Ubuntu operating system library files must have mode 0755 or less permissive: \e[0m"; 
 
  # Fix permissions if any affected files
sudo find /lib /lib64 /usr/lib -perm /022 -type f -exec chmod 755 '{}' \;
  echo -ne "\e[1;35m   |_ STATUS: \e[0m"; echo  "Compliance"
echo "";

# Finding ID V-238326 | Version UBTU-20-010405 | SV-238326r877396_rule | Severity Medium
  echo -e "\e[1;35m   |_ ID V-238326: The Ubuntu operating system must not have the telnet package installed: \e[0m"; 

# Fix permissions if any affected files
sudo apt-get remove telnetd -y >/dev/null 2>&1
  echo -ne "\e[1;35m   |_ STATUS: \e[0m"; echo  "Compliance"
echo "";
exit 0