locals {
  webapp_vm1 = "Ubuntu 20.04 Backend-v0.1"
  timestamp  = regex_replace(timestamp(), "[- TZ:]", "")
}

variable "ami_id" {
  description = "AMI ID of base image"
  type        = string
  default     = "ami-0261755bbcb8c4a84"
}

variable "ami_description_vm1" {
  description = "AMI Name description 1"
  type        = string
  default     = "Ubuntu 20.04 - Webapp:BACKEND-v0.1"
}

variable "region" {
  description = "Versión del backend de la aplicación web"
  type        = string
  default     = "us-east-1"
}

variable "instance_type" {
  description = "Type of instance"
  type        = string
  default     = "t2.micro"
}

variable "access_key" {
  description = "Clave de acceso de AWS"
  type        = string
  default     = "AWS_ACCESS_KEY_ID"
}

variable "secret_key" {
  description = "Clave secreta de AWS"
  type        = string
  default     = "AWS_SECRET_ACCESS_KEY"
}

variable "ssh_username" {
  description = "Nombre de usuario SSH para conectarse a la instancia EC2"
  type        = string
  default     = "ubuntu"
}
