# DigitalOcean Deploy London 2025 Web Application

A simple, modern web application deployed across multiple DigitalOcean regions with global load balancing.

## Features

- **Modern UI**: Beautiful, responsive design with gradient backgrounds and glassmorphism effects
- **Multi-region Support**: Displays region information dynamically based on deployment location
- **Architecture View**: `/arch` route displays architecture diagrams
- **Repository Access**: `/repo` route redirects to GitHub repository
- **Health Monitoring**: `/health` endpoint for load balancer health checks
- **Mobile Responsive**: Optimized for all device sizes

## Routes

- `/` - Main landing page with DigitalOcean Deploy London 2025 branding
- `/arch` - Architecture diagram view
- `/repo` - Redirects to GitHub repository
- `/health` - Health check endpoint for load balancers

## Technology Stack

- **Backend**: Node.js with Express.js
- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Styling**: Modern CSS with gradients, backdrop filters, and animations
- **Deployment**: Systemd service for process management

## Configuration

The application can be configured using environment variables:

- `PORT` - Server port (default: 8080)
- `DEPLOYED_REGION` - Region where the application is deployed
- `ARCHITECTURE_IMAGE_URL` - URL of the architecture diagram image
- `GITHUB_REPO_URL` - GitHub repository URL for /repo redirect

## Local Development

1. Install Node.js 18+
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Docker Deployment

The application includes a Dockerfile for containerized deployment:

```bash
docker build -t digitalocean-deploy-london-2025 .
docker run -p 8080:8080 digitalocean-deploy-london-2025
```

## Terraform Integration

This web application is designed to be deployed via Terraform with the globally load-balanced web servers configuration. The Terraform configuration:

- Installs Node.js and dependencies on Ubuntu droplets
- Creates systemd service for automatic startup
- Configures environment variables for region and customization
- Sets up health monitoring

## Customization

To customize the application:

1. **Architecture Image**: Update the `architecture_image_url` variable in your Terraform configuration
2. **Repository URL**: Update the `github_repo_url` variable in your Terraform configuration
3. **Styling**: Modify the CSS in the HTML templates or create separate CSS files
4. **Content**: Update the HTML content in the server.js file

## Health Monitoring

The application provides a health endpoint at `/health` that returns:

```json
{
  "status": "healthy",
  "timestamp": "2025-01-XX...",
  "region": "lon1"
}
```

This endpoint is used by DigitalOcean load balancers for health checks.


