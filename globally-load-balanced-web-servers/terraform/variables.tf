variable "domain" {
  description = "Domain to use for the GLB, plus optional RLB records. This domain must be DO managed."
  type        = string
}

variable "name_prefix" {
  description = "Name to use for the name prefix of the created resources."
  type        = string
}

variable "tls" {
  description = "If set to true will create an LetsEncrypt SSL cert and configure LBs to use TLS"
  type        = bool
  default     = true
}

variable "ssh_key" {
  description = "Name of an existing SSH Key that will be used to access the Droplet."
  type        = string
  # In most cases this would only be null for testing purposes.
  default = null
}

variable "droplet_count" {
  description = "number of droplets in each region"
  type        = number
  default     = 1
}

variable "droplet_size" {
  description = "Size of the droplets"
  type        = string
}

variable "droplet_image" {
  description = "Image used for the droplets"
  type        = string
}

variable "vpcs" {
  type = list(object({
    region   = string
    ip_range = string
  }))
  description = "List of VPC configurations"

  validation {
    condition     = length(var.vpcs) > 1
    error_message = "Please Specify more than one VPC configuration."
  }
}

variable "architecture_image_url" {
  description = "URL to the architecture diagram image to display in the UI"
  type        = string
  default     = "https://via.placeholder.com/800x600/0080ff/ffffff?text=Architecture+Diagram"
  
  validation {
    condition     = can(regex("^https?://.*", var.architecture_image_url))
    error_message = "Architecture image URL must be a valid HTTP or HTTPS URL."
  }
}

variable "github_repo_url" {
  description = "GitHub repository URL to redirect to from the /repo route"
  type        = string
  default     = "https://github.com/digitalocean/terraform-digitalocean-multi-region-vpc"
  
  validation {
    condition     = can(regex("^https://github\\.com/.*", var.github_repo_url))
    error_message = "GitHub repository URL must be a valid GitHub repository URL."
  }
}

variable "enable_monitoring" {
  description = "Enable additional monitoring and health check endpoints"
  type        = bool
  default     = true
}

variable "custom_ui_title" {
  description = "Custom title for the web UI (defaults to 'DigitalOcean Deploy 2025')"
  type        = string
  default     = "DigitalOcean Deploy 2025"
}

variable "ui_theme_color" {
  description = "Primary theme color for the UI (hex color code)"
  type        = string
  default     = "#00d4aa"
  
  validation {
    condition     = can(regex("^#[0-9a-fA-F]{6}$", var.ui_theme_color))
    error_message = "UI theme color must be a valid hex color code (e.g., #00d4aa)."
  }
}