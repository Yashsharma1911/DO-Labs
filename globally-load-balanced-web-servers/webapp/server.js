const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname)));

// Main route - serve the index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Architecture route - show architecture image
app.get('/arch', (req, res) => {
    // You can provide the architecture image URL here
    const architectureImageUrl = process.env.ARCHITECTURE_IMAGE_URL || 'https://via.placeholder.com/800x600/667eea/ffffff?text=Architecture+Diagram';
    
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Architecture - DigitalOcean Deploy London 2025</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    color: white;
                }

                .container {
                    text-align: center;
                    max-width: 1000px;
                    padding: 2rem;
                }

                .header {
                    margin-bottom: 2rem;
                }

                .title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                }

                .back-button {
                    background: rgba(255, 255, 255, 0.2);
                    color: white;
                    padding: 0.8rem 1.5rem;
                    border: none;
                    border-radius: 25px;
                    text-decoration: none;
                    font-size: 1rem;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    display: inline-block;
                    margin-bottom: 2rem;
                }

                .back-button:hover {
                    background: rgba(255, 255, 255, 0.3);
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                }

                .architecture-image {
                    max-width: 100%;
                    height: auto;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                    border: 2px solid rgba(255, 255, 255, 0.2);
                }

                .image-container {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border-radius: 15px;
                    padding: 2rem;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .description {
                    margin-top: 2rem;
                    font-size: 1.1rem;
                    opacity: 0.9;
                    line-height: 1.6;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <a href="/" class="back-button">← Back to Home</a>
                    <div class="title">Architecture Overview</div>
                </div>

                <div class="image-container">
                    <img src="${architectureImageUrl}" alt="Architecture Diagram" class="architecture-image">
                    <div class="description">
                        <p><strong>DigitalOcean Global Load Balancer Architecture</strong></p>
                        <p>This diagram shows the multi-region deployment architecture with global and regional load balancers.</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `);
});

// Repository route - redirect to GitHub
app.get('/repo', (req, res) => {
    const repoUrl = process.env.GITHUB_REPO_URL || 'https://github.com/your-username/your-repo';
    res.redirect(repoUrl);
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        region: process.env.DEPLOYED_REGION || 'unknown'
    });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Region: ${process.env.DEPLOYED_REGION || 'unknown'}`);
});


