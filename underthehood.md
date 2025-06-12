<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Under the Hood - Tier 4 Intelligence</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: #000;
            color: #fff;
            overflow: hidden;
        }

        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }

        .modal {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            border: 1px solid #333;
            border-radius: 16px;
            width: 90vw;
            max-width: 1200px;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
        }

        .modal-header {
            padding: 32px 40px 24px;
            border-bottom: 1px solid #333;
        }

        .close-btn {
            position: absolute;
            top: 24px;
            right: 24px;
            background: none;
            border: none;
            color: #888;
            font-size: 24px;
            cursor: pointer;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            transition: all 0.2s;
        }

        .close-btn:hover {
            background: #333;
            color: #fff;
        }

        .modal-title {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .modal-subtitle {
            font-size: 18px;
            color: #ccc;
            line-height: 1.5;
        }

        .tabs {
            display: flex;
            padding: 0 40px;
            border-bottom: 1px solid #333;
        }

        .tab {
            padding: 16px 24px;
            background: none;
            border: none;
            color: #888;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            border-bottom: 2px solid transparent;
            transition: all 0.2s;
        }

        .tab.active {
            color: #00ff88;
            border-bottom-color: #00ff88;
        }

        .tab:hover:not(.active) {
            color: #ccc;
        }

        .modal-content {
            padding: 40px;
        }

        .process-overview {
            text-align: center;
            margin-bottom: 48px;
        }

        .process-title {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 16px;
        }

        .process-title .highlight {
            color: #00ff88;
        }

        .process-description {
            font-size: 18px;
            color: #ccc;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
        }

        .steps-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
            gap: 32px;
            margin-bottom: 48px;
        }

        .step-card {
            background: linear-gradient(135deg, #2a2a2a 0%, #1e1e1e 100%);
            border: 1px solid #333;
            border-radius: 12px;
            padding: 32px 28px;
            position: relative;
            transition: all 0.3s ease;
        }

        .step-card:hover {
            border-color: #00ff88;
            transform: translateY(-4px);
            box-shadow: 0 20px 40px rgba(0, 255, 136, 0.1);
        }

        .step-number {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%);
            color: #000;
            font-size: 24px;
            font-weight: 800;
            border-radius: 12px;
            margin-bottom: 20px;
        }

        .step-title {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 8px;
            color: #fff;
        }

        .step-timeline {
            font-size: 14px;
            color: #00ff88;
            font-weight: 600;
            margin-bottom: 16px;
        }

        .step-description {
            font-size: 16px;
            color: #ccc;
            line-height: 1.6;
            margin-bottom: 20px;
        }

        .tech-highlights {
            list-style: none;
            padding: 0;
        }

        .tech-highlights li {
            font-size: 14px;
            color: #888;
            margin-bottom: 8px;
            padding-left: 20px;
            position: relative;
        }

        .tech-highlights li:before {
            content: "▶";
            color: #00ff88;
            position: absolute;
            left: 0;
            font-size: 12px;
        }

        .cta-section {
            text-align: center;
            padding: 32px;
            background: linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%);
            border-radius: 12px;
            border: 1px solid #333;
        }

        .cta-buttons {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .btn-primary {
            background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%);
            color: #000;
            border: none;
            padding: 16px 32px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 255, 136, 0.3);
        }

        .btn-secondary {
            background: transparent;
            color: #00ff88;
            border: 2px solid #00ff88;
            padding: 14px 32px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .btn-secondary:hover {
            background: #00ff88;
            color: #000;
        }

        .tab-content {
            display: none;
        }

        .tab-content.active {
            display: block;
        }

        @media (max-width: 768px) {
            .modal {
                width: 95vw;
                margin: 20px;
            }

            .modal-header {
                padding: 24px 20px;
            }

            .modal-content {
                padding: 24px 20px;
            }

            .tabs {
                padding: 0 20px;
            }

            .steps-container {
                grid-template-columns: 1fr;
                gap: 24px;
            }

            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
</head>
<body>
    <div class="modal-overlay">
        <div class="modal">
            <div class="modal-header">
                <button class="close-btn">&times;</button>
                <h1 class="modal-title">Under the Hood</h1>
                <p class="modal-subtitle">How We Engineer AI That Actually Understands Your Business</p>
            </div>

            <div class="tabs">
                <button class="tab active" data-tab="process">The Process</button>
                <button class="tab" data-tab="architecture">Technical Architecture</button>
                <button class="tab" data-tab="agents">Agent Intelligence</button>
            </div>

            <div class="modal-content">
                <!-- The Process Tab Content -->
                <div id="tab-process" class="tab-content active">
                    <div class="process-overview">
                        <h2 class="process-title">Three Phases to <span class="highlight">AI That Knows Your Business</span></h2>
                        <p class="process-description">
                            We don't build generic AI and hope it works. We engineer a custom intelligence system that understands your industry, your processes, and your unique operational DNA before it ever touches your business.
                        </p>
                    </div>

                    <div class="steps-container">
                        <div class="step-card">
                            <div class="step-number">01</div>
                            <h3 class="step-title">DEEP INTELLIGENCE GATHERING</h3>
                            <div class="step-timeline">Week 1-4</div>
                            <p class="step-description">
                                We conduct comprehensive reconnaissance of your business ecosystem - not just surface-level analysis, but deep industry intelligence gathering that maps your competitive landscape, market dynamics, and operational context.
                            </p>
                            <ul class="tech-highlights">
                                <li>Multi-source data aggregation across industry databases</li>
                                <li>Competitive intelligence and market trend analysis</li>
                                <li>Social sentiment and digital footprint mapping</li>
                                <li>Identification of relevant real-time data feeds</li>
                                <li>Business process archaeology and tribal knowledge extraction</li>
                            </ul>
                        </div>

                        <div class="step-card">
                            <div class="step-number">02</div>
                            <h3 class="step-title">AGENT ARCHITECTURE DESIGN</h3>
                            <div class="step-timeline">Week 5-8</div>
                            <p class="step-description">
                                We engineer four specialized AI agents with complex meta-prompts, each calibrated to your industry and equipped with the mental models needed to elevate your business to the next operational level.
                            </p>
                            <ul class="tech-highlights">
                                <li>Custom agent personas with industry-specific expertise</li>
                                <li>Hierarchical intelligence from macro strategy to micro execution</li>
                                <li>Integration with team communications and workflows</li>
                                <li>Advanced prompt engineering with contextual awareness</li>
                                <li>Real-time collaborative intelligence extraction</li>
                            </ul>
                        </div>

                        <div class="step-card">
                            <div class="step-number">03</div>
                            <h3 class="step-title">CONTEXT GRAPH CONSTRUCTION</h3>
                            <div class="step-timeline">Week 9-12</div>
                            <p class="step-description">
                                We build your proprietary Context Graph™ - a dynamic knowledge repository that becomes an invaluable company asset, storing your processes, insights, and AI-ready prompts for continuous business intelligence.
                            </p>
                            <ul class="tech-highlights">
                                <li>Proprietary knowledge graph construction</li>
                                <li>Automated bottleneck identification and resolution</li>
                                <li>Custom automation recommendations and implementation</li>
                                <li>Enterprise-grade AI prompt library development</li>
                                <li>Continuous learning and adaptation mechanisms</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Technical Architecture Tab Content -->
                <div id="tab-architecture" class="tab-content">
                    <div class="process-overview">
                        <h2 class="process-title">The <span class="highlight">Context Graph™</span> Technical Foundation</h2>
                        <p class="process-description">
                            Built on enterprise-grade knowledge graph architecture, our Context Graph™ creates a dynamic, semantic understanding of your business that evolves with your operations.
                        </p>
                    </div>

                    <div class="steps-container">
                        <div class="step-card">
                            <div class="step-number">🔗</div>
                            <h3 class="step-title">SEMANTIC KNOWLEDGE GRAPH</h3>
                            <div class="step-timeline">Core Architecture</div>
                            <p class="step-description">
                                Advanced graph database architecture that maps relationships between your business entities, processes, and tribal knowledge in a way AI can understand and navigate.
                            </p>
                            <ul class="tech-highlights">
                                <li>Neo4j-powered graph database with custom ontologies</li>
                                <li>Real-time relationship mapping and inference</li>
                                <li>Semantic embedding layers for contextual understanding</li>
                                <li>Dynamic schema evolution as business grows</li>
                                <li>Enterprise-grade security and access controls</li>
                            </ul>
                        </div>

                        <div class="step-card">
                            <div class="step-number">🧠</div>
                            <h3 class="step-title">AI-READY DATA ARCHITECTURE</h3>
                            <div class="step-timeline">Data Layer</div>
                            <p class="step-description">
                                Multi-modal data integration that transforms your scattered business information into a unified, AI-consumable intelligence layer.
                            </p>
                            <ul class="tech-highlights">
                                <li>Vector embeddings for semantic search capabilities</li>
                                <li>Real-time data pipelines and streaming updates</li>
                                <li>Natural language processing for document ingestion</li>
                                <li>API-first design for seamless integrations</li>
                                <li>Automated data quality and consistency monitoring</li>
                            </ul>
                        </div>

                        <div class="step-card">
                            <div class="step-number">⚡</div>
                            <h3 class="step-title">ADAPTIVE LEARNING SYSTEM</h3>
                            <div class="step-timeline">Intelligence Layer</div>
                            <p class="step-description">
                                Self-improving system that learns from every interaction, continuously refining its understanding of your business context and operational patterns.
                            </p>
                            <ul class="tech-highlights">
                                <li>Feedback loops for continuous model improvement</li>
                                <li>Pattern recognition for process optimization</li>
                                <li>Anomaly detection for operational insights</li>
                                <li>Automated prompt optimization and A/B testing</li>
                                <li>Version control for AI prompt libraries</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Agent Intelligence Tab Content -->
                <div id="tab-agents" class="tab-content">
                    <div class="process-overview">
                        <h2 class="process-title">Your <span class="highlight">AI Executive Team</span> Architecture</h2>
                        <p class="process-description">
                            Four specialized AI agents, each with distinct cognitive models and industry expertise, working together as your virtual C-suite to drive strategic transformation.
                        </p>
                    </div>

                    <div class="steps-container">
                        <div class="step-card">
                            <div class="step-number">🎯</div>
                            <h3 class="step-title">ATLAS - Strategic Intelligence</h3>
                            <div class="step-timeline">30,000-Foot Strategist</div>
                            <p class="step-description">
                                Market intelligence and strategic pattern recognition. ATLAS synthesizes industry trends, competitive dynamics, and emerging opportunities to set transformative strategic direction.
                            </p>
                            <ul class="tech-highlights">
                                <li>Real-time market sentiment analysis and trend forecasting</li>
                                <li>Competitive intelligence aggregation and insights</li>
                                <li>Strategic scenario planning and risk modeling</li>
                                <li>Industry-specific mental models and best practices</li>
                                <li>C-suite communication and executive briefing generation</li>
                            </ul>
                        </div>

                        <div class="step-card">
                            <div class="step-number">🧭</div>
                            <h3 class="step-title">NAVIGATOR - Operational Planning</h3>
                            <div class="step-timeline">Strategic Operations Chief</div>
                            <p class="step-description">
                                Translates strategic vision into executable roadmaps. NAVIGATOR analyzes your current state and designs optimal pathways to achieve strategic objectives.
                            </p>
                            <ul class="tech-highlights">
                                <li>Gap analysis and capability assessment</li>
                                <li>Resource allocation optimization</li>
                                <li>Risk assessment and mitigation planning</li>
                                <li>OKR development and milestone tracking</li>
                                <li>Cross-functional dependency mapping</li>
                            </ul>
                        </div>

                        <div class="step-card">
                            <div class="step-number">🎼</div>
                            <h3 class="step-title">MAESTRO - Integration Orchestration</h3>
                            <div class="step-timeline">Chief Integration Officer</div>
                            <p class="step-description">
                                Coordinates complex implementations across teams and systems. MAESTRO ensures seamless integration of AI solutions into your existing operational fabric.
                            </p>
                            <ul class="tech-highlights">
                                <li>Workflow automation design and implementation</li>
                                <li>System integration and API orchestration</li>
                                <li>Change management and adoption strategies</li>
                                <li>Performance monitoring and optimization</li>
                                <li>Cross-departmental coordination and communication</li>
                            </ul>
                        </div>

                        <div class="step-card">
                            <div class="step-number">⚡</div>
                            <h3 class="step-title">CATALYST - Execution Engine</h3>
                            <div class="step-timeline">Chief Action Officer</div>
                            <p class="step-description">
                                Drives real-world implementation and immediate value creation. CATALYST focuses on rapid execution, continuous improvement, and measurable business impact.
                            </p>
                            <ul class="tech-highlights">
                                <li>Task automation and process optimization</li>
                                <li>Real-time performance tracking and reporting</li>
                                <li>Issue resolution and rapid response protocols</li>
                                <li>Team training and adoption facilitation</li>
                                <li>ROI measurement and value demonstration</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="cta-section">
                    <div class="cta-buttons">
                        <a href="#" class="btn-primary">
                            🎯 GET YOUR OPPORTUNITY ASSESSMENT
                        </a>
                        <a href="#" class="btn-secondary">
                            📞 SCHEDULE TECHNICAL DEEP DIVE
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Close modal functionality
        document.querySelector('.close-btn').addEventListener('click', function() {
            document.querySelector('.modal-overlay').style.display = 'none';
        });

        // Close on overlay click
        document.querySelector('.modal-overlay').addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });

        // Tab functionality
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs and content
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Show corresponding content
                const targetTab = this.getAttribute('data-tab');
                document.getElementById('tab-' + targetTab).classList.add('active');
            });
        });
    </script>
</body>
</html>