source "amazon-ebs" "backend" {
  ami_description             = "Golden Image - ${var.ami_description_vm1}"
  ami_name                    = "${local.webapp_vm1}-${local.timestamp}"
  ami_virtualization_type     = "hvm"
  associate_public_ip_address = true
  force_delete_snapshot       = true
  force_deregister            = true
  instance_type               = "${var.instance_type}"
  region                      = "${var.region}"
  source_ami                  = var.ami_id
  spot_price                  = "0"
  ssh_pty                     = true
  ssh_timeout                 = "5m"
  access_key                  = "${var.access_key}"
  secret_key                  = "${var.secret_key}"
  ssh_username                = "${var.ssh_username}"
  tags = {
    OS_Version  = "Ubuntu Server 20.04 LTS"
    Release     = "Latest"
    Environment = "Development Server"
    Name        = local.webapp_vm1
  }
} 