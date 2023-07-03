build {
  sources = ["source.amazon-ebs.backend"]

  provisioner "shell" {
    script = "scripts/patch_server.sh"
  }

  provisioner "shell" {
    script = "scripts/software_installation.sh"
  }

  provisioner "shell" {
    script = "scripts/hardening_ubuntu.sh"
  }

  provisioner "shell" {
    script = "scripts/post_installation.sh"
  }
}