#!/bin/bash
# run Packer commands
packer init .
packer fmt .
packer validate .
packer build . 2>&1 | tee packer.log.txt
# Get the AMI ID from the packer.log.txt file
ami_ID=$(grep -o 'AMI: \S*' packer.log.txt | awk '{print $2}')
echo "ami_id = \"$(echo $ami_ID)\"" > temp.tfvars
ex -sc '/^ami_id/d' -cx terraform.tfvars
cat temp.tfvars | sed 's/\x1B\[[0-9;]*[mG]//' >> terraform.tfvars 
rm temp.tfvars
# run Terraform commands
terraform init
terraform fmt
terraform validate
terraform plan
terraform apply -auto-approve