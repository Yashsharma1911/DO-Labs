tls           = false
domain        = "yashtest.site"
name_prefix   = "glb-ws-test"
droplet_size  = "s-4vcpu-8gb"
droplet_image = "ubuntu-22-04-x64"
ssh_key       = "doks-smb"

# Custom web application configuration
architecture_image_url = "https://raw.githubusercontent.com/digitalocean/scale-with-simplicity/refs/heads/main/reference-architectures/globally-load-balanced-web-servers/globally-load-balanced-web-servers.png"
github_repo_url        = "https://github.com/digitalocean/scale-with-simplicity/tree/main/reference-architectures/globally-load-balanced-web-servers"
custom_ui_title = "My DigitalOcean Deploy 2025"
ui_theme_color = "#00d4aa" 
enable_monitoring = true
vpcs = [
  {
    region   = "nyc3",
    ip_range = "10.200.0.0/24"
  },
  {
    region   = "sfo3",
    ip_range = "10.200.1.0/24"
  },
  {
    region   = "ams3",
    ip_range = "10.200.2.0/24"
  }
]

