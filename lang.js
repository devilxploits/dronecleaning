/**
 * Sky Cleaner Services — lang.js
 * EN / FR translation system
 */

const TRANSLATIONS = {
  en: {
    /* ── Navbar ── */
    'nav.home':     'Home',
    'nav.about':    'About Us',
    'nav.services': 'Services',
    'nav.contact':  'Contact Us',
    'nav.quote':    'Get a Quote',

    /* ── Mobile menu ── */
    'mob.home':     'Home',
    'mob.about':    'About Us',
    'mob.services': 'Services',
    'mob.contact':  'Contact Us',
    'mob.quote':    'Get a Quote',

    /* ── Footer ── */
    'footer.tagline':   'Cleaning at a higher standard.',
    'footer.services':  'Services',
    'footer.svc1':      'High-Rise Window Cleaning',
    'footer.svc2':      'Building & Facade Restoration',
    'footer.svc3':      'Fleet Cleaning',
    'footer.svc4':      'Wind & Solar Cleaning',
    'footer.company':   'Company',
    'footer.f.home':    'Home',
    'footer.f.about':   'About Us',
    'footer.f.contact': 'Contact Us',
    'footer.contact_col': 'Contact Information',
    'footer.ceo':       'CEO: Allale Hassan Robleh',
    'footer.phone':     'Phone: 77 879440',
    'footer.rights':    '© 2026 Sky Cleaner Services. All rights reserved.',
    'footer.privacy':   'Privacy Policy',
    'footer.terms':     'Terms of Service',

    /* ── Hero ── */
    'hero.badge':   'Advanced Drone Cleaning Technology',
    'hero.gov':     '🇩🇯 Authorized by the Government of Djibouti',
    'hero.gov.sub': 'The company is in compliance with regulations of the republic of Djibouti.',
    'hero.title1':  'Cleaning at a',
    'hero.title2':  'Higher Standard',
    'hero.tagline': 'Advanced Drone-Powered Exterior Cleaning Solutions',
    'hero.desc':    'Sky Cleaner Services provides innovative, safe, and efficient cleaning solutions for high-rise buildings, industrial facilities, and renewable energy infrastructure in Djibouti & surrounding areas.',
    'hero.cta1':    'Request a Quote',
    'hero.cta2':    'Watch Technology',
    'hero.trust1':  '500+ Projects Delivered',
    'hero.trust2':  '99% Safety Record',
    'hero.trust3':  '24/7 Operational Support',
    'hero.r.projects': 'Projects',
    'hero.r.safety':   'Safety Rate',
    'hero.r.water':    'Water Saved',
    'hero.r.scaffold': 'Scaffolding Required',
    'hero.r.support':  'Support',

    /* ── Technology section ── */
    'tech.tag':   'Technology',
    'tech.title': 'Engineered for<br /><span class="gradient-text">precision cleaning.</span>',
    'tech.desc':  'Our drones combine aerospace-grade engineering with industrial cleaning systems to deliver unmatched results at any height.',
    'tech.c1.title': 'Advanced Pressure Systems',
    'tech.c1.desc':  'Deliver consistent, powerful results on any surface — from glass facades to industrial steel panels.',
    'tech.c2.title': 'Smart Detection Assisted',
    'tech.c2.desc':  'Smart control systems ensure precision positioning and safety at any altitude, in any weather condition also radar too protect from safe distance.',
    'tech.c3.title': 'Optimized Water Usage',
    'tech.c3.desc':  'High-efficiency nozzles achieve maximum coverage with up to 40% less water than traditional methods.',
    'tech.c4.title': 'Live Sensor Feedback',
    'tech.c4.desc':  'Real-time camera and sensor arrays monitor surface cleanliness and adjust pressure dynamically.',
    'tech.c5.title': 'Modular Architecture',
    'tech.c5.desc':  'Swap cleaning heads in minutes. Designed for efficiency across complex structures and surface types.',
    'tech.c6.title': 'Zero Human Exposure',
    'tech.c6.desc':  'Fully remote operations eliminate risk to workers on high-rise structures and hazardous environments.',

    /* ── Capabilities ── */
    'cap.tag':   'Capabilities',
    'cap.title': 'Core <span class="blue-text">Capabilities.</span>',
    'cap.drag':  'Drag to Explore',
    'cap.c1.title': 'High-Rise Window Cleaning',
    'cap.c1.desc':  'Spotless, streak-free glass exterior cleaning for skyscrapers across the city skyline.',
    'cap.c2.title': 'Building & Facade Restoration',
    'cap.c2.desc':  'High-pressure washing to restore the original look of stone, brick, and concrete facades.',
    'cap.c3.title': 'Fleet & Heavy Eq. Cleaning',
    'cap.c3.desc':  'Efficient dirt and grime removal for commercial fleets and heavy operational machinery.',
    'cap.c4.title': 'Wind & Solar Cleaning',
    'cap.c4.desc':  'Safe and effective cleaning for solar panel fields and wind turbines, optimizing energy output.',

    /* ── Zigzag section ── */
    'zz1.label':  'No Scaffolding Required',
    'zz1.title':  'Reach any height.<br /><span class="gradient-text">Without the risk.</span>',
    'zz1.body':   'Our drones eliminate the need for scaffolding, rope access, or cherry pickers — cutting setup costs by up to 70% and removing all fall risks for your crew.',
    'zz1.b1':     'Deploy on any facade in under 30 minutes',
    'zz1.b2':     'Certified for buildings up to 160m',
    'zz1.b3':     'No disruption to building occupants',
    'zz1.cta':    'Get a Free Assessment →',
    'zz1.stat1s': 'Scaffolding',
    'zz1.stat2s': 'Faster',
    'zz1.stat3s': 'Safe',
    'zz1.tag1':   'High-Rise',
    'zz1.tag2':   'Zero Risk',
    'zz1.tag3':   'Fully Remote',

    'zz2.label':  'Precision Water Systems',
    'zz2.title':  'Powerful spray.<br /><span class="gradient-text">Pinpoint control.</span>',
    'zz2.body':   'Our high-pressure nozzle arrays deliver up to 150 bar of cleaning pressure, while smart flow control ensures optimal water use — every drop counts.',
    'zz2.b1':     '150 bar pressure output',
    'zz2.b2':     '40% less water vs traditional methods',
    'zz2.b3':     'Adjustable spray patterns per surface type',
    'zz2.cta':    'Learn About Our Tech →',
    'zz2.stat1s': 'Bar PSI',
    'zz2.stat2s': 'Less Water',
    'zz2.stat3s': 'Coverage',
    'zz2.tag1':   'High-Pressure',
    'zz2.tag2':   'Eco-Flow',
    'zz2.tag3':   'Adaptive',

    'zz3.label':  'Eco-Responsible Operations',
    'zz3.title':  'Better results.<br /><span class="eco-gradient-text">Better for Earth.</span>',
    'zz3.body':   'Our entire fleet runs on electric power with zero direct emissions. We use only biodegradable, eco-certified cleaning solutions approved for urban runoff environments.',
    'zz3.b1':     '100% electric-powered drones',
    'zz3.b2':     'Biodegradable, pH-neutral cleaning agents',
    'zz3.b3':     'ESG-compliant reporting for every project',
    'zz3.cta':    'Start Green Cleaning →',
    'zz3.stat1s': 'Emissions',
    'zz3.stat2s': 'Electric',
    'zz3.stat3s': 'Agents',
    'zz3.tag1':   'Eco Certified',
    'zz3.tag2':   'Net Zero',
    'zz3.tag3':   'Carbon Safe',

    /* ── Industries ── */
    'ind.tag':   'Industries',
    'ind.title': 'Built for every<br /><span class="blue-text">vertical.</span>',
    'ind.desc':  'From commercial real estate to industrial facilities — Sky Cleaner adapts to your environment.',
    'ind.c1.title': 'Commercial Buildings',
    'ind.c1.desc':  'Glass facades, curtain walls, and multi-story commercial properties cleaned safely and efficiently.',
    'ind.c2.title': 'Industrial Facilities',
    'ind.c2.desc':  'Warehouses, factories, and plants requiring routine exterior maintenance without production downtime.',
    'ind.c3.title': 'Construction Sites',
    'ind.c3.desc':  'Post-construction cleaning with minimal disruption to ongoing operations and tight timelines.',
    'ind.c4.title': 'Solar Installations',
    'ind.c4.desc':  'Panel-safe cleaning protocols that maintain energy efficiency and maximize power output.',
    'ind.c5.title': 'Infrastructure',
    'ind.c5.desc':  'Bridges, towers, and complex structures inaccessible by traditional scaffolding methods.',
    'ind.c6.title': 'Hospitality',
    'ind.c6.desc':  'Hotels and resorts maintaining pristine exterior appearances with minimal operational disruption.',
    'ind.c7.title': 'WindMills',
    'ind.c7.desc':  'Efficient drone cleaning for wind turbines, enhancing performance, safety, and operational lifespan without interrupting energy production.',

    /* ── Eco / Safety section ── */
    'eco.tag':   'Safety & Environment',
    'eco.title': 'Safe for people.<br /><span class="eco-gradient-text">Better for the planet.</span>',
    'eco.desc':  'Every mission is engineered to protect workers, clients, and the environment — without compromising results.',
    'eco.l1.title': 'Zero human exposure at height',
    'eco.l1.desc':  'Remote operations eliminate risk to all ground and aerial workers.',
    'eco.l2.title': 'Water-efficient cleaning systems',
    'eco.l2.desc':  'Up to 40% water reduction versus conventional pressure washing.',
    'eco.l3.title': 'Biodegradable cleaning agents',
    'eco.l3.desc':  'Eco-certified solutions safe for runoff into urban drainage systems.',
    'eco.l4.title': 'Electric-powered fleet',
    'eco.l4.desc':  'Zero direct emissions across all drone operations.',
    'eco.m1.label': 'Less Water Used',
    'eco.m2.label': 'Electric Powered',
    'eco.m3.label': 'Workers at Height',

    /* ── Video section ── */
    'video.tag':   'See It In Action',
    'video.title': 'Watch our drones<br /><span class="gradient-text">clean at scale.</span>',
    'video.desc':  'Real operations, real results — see exactly how Sky Cleaner Services transforms buildings across Djibouti.',

    /* ── Process section ── */
    'proc.tag':   'How It Works',
    'proc.title': 'From assessment<br /><span class="blue-text">to completion.</span>',
    'proc.desc':  'A clean, structured process that gets results — every time.',
    'proc.s1.title': 'Site Assessment',
    'proc.s1.desc':  'Our team surveys the site and designs a custom drone flight plan tailored to your structure.',
    'proc.s2.title': 'Drone Deployment',
    'proc.s2.desc':  'Precision-calibrated drones are deployed with optimized cleaning solutions and pressure settings.',
    'proc.s3.title': 'Live Monitoring',
    'proc.s3.desc':  'Real-time sensor data and camera feeds ensure quality control throughout the operation.',

    /* ── Contact section ── */
    'contact.tag':   'Get Started',
    'contact.title': 'Ready to clean<br /><span class="blue-text">at scale?</span>',
    'contact.desc':  'Tell us about your project and we\'ll deploy a solution built around your needs and timeline.',
    'contact.badge1': 'Free site assessment',
    'contact.badge2': 'No scaffolding costs',
    'contact.badge3': 'Insured & certified operators',
    'contact.badge4': '24-hour quote turnaround',
    'form.fname':      'First Name',
    'form.lname':      'Last Name',
    'form.email':      'Email Address',
    'form.phone':      'Phone Number',
    'form.btype':      'Building Type',
    'form.btype.ph':   'Select your building type',
    'form.btype.commercial':     'Commercial Building',
    'form.btype.industrial':     'Industrial Facility',
    'form.btype.residential':    'Residential Complex',
    'form.btype.infrastructure': 'Infrastructure / Bridge',
    'form.btype.solar':          'Solar Installation',
    'form.btype.other':          'Other',
    'form.message':    'Project Details',
    'form.message.ph': 'Describe your property, size, and cleaning requirements...',
    'form.submit':     'Request a Quote',

    /* ── About page ── */
    'about.page.title':    'About Us',
    'about.page.subtitle': 'Transforming the exterior cleaning industry in Djibouti.',
    'about.s1.title': 'Company Overview',
    'about.s1.p1':    '<strong>Sky Cleaner Services is a modern drone-powered exterior cleaning company headquartered in Djibouti City, Djibouti.</strong> The company specializes in providing innovative, safe, and efficient cleaning solutions for high-rise buildings, industrial facilities, and renewable energy infrastructure.',
    'about.s1.p2':    'By combining advanced drone technology with professional cleaning systems, Sky Cleaner Services eliminates the need for traditional scaffolding, cranes, and high-risk manual work.',
    'about.s1.p3':    'Our solutions are designed to deliver high performance, reduced operational risks, and environmentally responsible cleaning services across Djibouti. We proudly serve clients in the commercial, industrial, government, and renewable energy sectors.',
    'about.s2.title': 'Our Mission',
    'about.s2.p1':    'To become Djibouti\'s leading drone-powered exterior cleaning company by delivering innovative, reliable, and environmentally responsible solutions while maintaining the highest standards of safety and efficiency.',
    'about.s3.title': 'Our Vision',
    'about.s3.p1':    'Our vision is to transform the exterior cleaning industry in Djibouti and the wider region by introducing cutting-edge aerial technology that improves safety, efficiency, and environmental sustainability.',
    'about.s4.title': 'Why Choose Sky Cleaner Services',
    'about.s4.p1':    'Clients choose Sky Cleaner Services because we provide innovative approaches that allow businesses to maintain their properties more efficiently and with significantly lower risk.',
    'about.s4.li1':   'Faster cleaning operations',
    'about.s4.li2':   'Safer working conditions',
    'about.s4.li3':   'Reduced operational costs',
    'about.s4.li4':   'Advanced drone technology',
    'about.s4.li5':   'Professional and reliable service',
    'about.s4.li6':   'Environmentally responsible cleaning solutions',
    'about.stat.gov':     '🇩🇯 Authorized by the Government of Djibouti',
    'about.stat.gov.sub': 'The company is in compliance with regulations of the Republic of Djibouti.',

    /* ── Contact page header ── */
    'contact.page.title':    'Contact Us',
    'contact.page.subtitle': 'We\'re here to help you clean at scale.',

    /* ── Privacy page ── */
    'privacy.page.title': 'Privacy Policy',
    'privacy.s1.title':   '1. Information We Collect',
    'privacy.s1.p1':      'Sky Cleaner Services values your privacy. We collect personal information you provide to us directly through contact forms on our website. This may include your name, email address, phone number, and project details.',
    'privacy.s2.title':   '2. How We Use Your Information',
    'privacy.s2.p1':      'We use the information collected exclusively to communicate with you about your projects, coordinate quotes, and provide our drone-powered cleaning services.',

    /* ── Terms page ── */
    'terms.page.title': 'Terms & Conditions',
    'terms.s1.title':   '1. Introduction',
    'terms.s1.p1':      'Welcome to Sky Cleaner Services. By using our website and services, you agree to comply with the terms and conditions outlined here.',
    'terms.s2.title':   '2. Services Provided',
    'terms.s2.p1':      'We provide drone-powered exterior cleaning solutions across Djibouti. Specific project timelines, costs, and terms will be provided in writing following a site assessment.',

    /* ── Toast messages ── */
    'toast.sending':   'Sending…',
    'toast.success':   '✓ Quote request submitted! We\'ll be in touch within 24 hours.',
    'toast.err.name':  'Please enter your first name.',
    'toast.err.email': 'Please enter a valid email.',
  },

  fr: {
    /* ── Navbar ── */
    'nav.home':     'Accueil',
    'nav.about':    'À Propos',
    'nav.services': 'Services',
    'nav.contact':  'Nous Contacter',
    'nav.quote':    'Obtenir un Devis',

    /* ── Mobile menu ── */
    'mob.home':     'Accueil',
    'mob.about':    'À Propos',
    'mob.services': 'Services',
    'mob.contact':  'Nous Contacter',
    'mob.quote':    'Obtenir un Devis',

    /* ── Footer ── */
    'footer.tagline':   'Nettoyage à un niveau supérieur.',
    'footer.services':  'Services',
    'footer.svc1':      'Nettoyage de Vitres en Hauteur',
    'footer.svc2':      'Restauration de Façades',
    'footer.svc3':      'Nettoyage de Flotte',
    'footer.svc4':      'Nettoyage Éolien & Solaire',
    'footer.company':   'Entreprise',
    'footer.f.home':    'Accueil',
    'footer.f.about':   'À Propos',
    'footer.f.contact': 'Nous Contacter',
    'footer.contact_col': 'Coordonnées',
    'footer.ceo':       'PDG : Allale Hassan Robleh',
    'footer.phone':     'Tél : 77 879440',
    'footer.rights':    '© 2026 Sky Cleaner Services. Tous droits réservés.',
    'footer.privacy':   'Politique de Confidentialité',
    'footer.terms':     'Conditions d\'Utilisation',

    /* ── Hero ── */
    'hero.badge':   'Technologie Avancée de Nettoyage par Drone',
    'hero.gov':     '🇩🇯 Autorisé par le Gouvernement de Djibouti',
    'hero.gov.sub': 'L\'entreprise est en conformité avec les réglementations de la République de Djibouti.',
    'hero.title1':  'Nettoyage à un',
    'hero.title2':  'Niveau Supérieur',
    'hero.tagline': 'Solutions Avancées de Nettoyage Extérieur par Drone',
    'hero.desc':    'Sky Cleaner Services fournit des solutions de nettoyage innovantes, sûres et efficaces pour les immeubles de grande hauteur, les installations industrielles et les infrastructures d\'énergie renouvelable à Djibouti et dans les zones environnantes.',
    'hero.cta1':    'Demander un Devis',
    'hero.cta2':    'Voir la Technologie',
    'hero.trust1':  '500+ Projets Réalisés',
    'hero.trust2':  '99% de Sécurité',
    'hero.trust3':  'Support Opérationnel 24h/24',
    'hero.r.projects': 'Projets',
    'hero.r.safety':   'Taux de Sécurité',
    'hero.r.water':    'Eau Économisée',
    'hero.r.scaffold': 'Échafaudage Requis',
    'hero.r.support':  'Support',

    /* ── Technology section ── */
    'tech.tag':   'Technologie',
    'tech.title': 'Conçu pour<br /><span class="gradient-text">un nettoyage précis.</span>',
    'tech.desc':  'Nos drones combinent une ingénierie de qualité aérospatiale avec des systèmes de nettoyage industriels pour des résultats inégalés à toute hauteur.',
    'tech.c1.title': 'Systèmes de Pression Avancés',
    'tech.c1.desc':  'Délivrent des résultats constants et puissants sur toute surface — des façades en verre aux panneaux d\'acier industriels.',
    'tech.c2.title': 'Détection Intelligente Assistée',
    'tech.c2.desc':  'Les systèmes de contrôle intelligents assurent un positionnement précis et la sécurité à toute altitude, par toutes conditions météorologiques, avec radar de protection à distance sécurisée.',
    'tech.c3.title': 'Utilisation Optimisée de l\'Eau',
    'tech.c3.desc':  'Les buses haute efficacité assurent une couverture maximale avec jusqu\'à 40% moins d\'eau qu\'avec les méthodes traditionnelles.',
    'tech.c4.title': 'Retour Capteur en Temps Réel',
    'tech.c4.desc':  'Les caméras et capteurs en temps réel surveillent la propreté des surfaces et ajustent dynamiquement la pression.',
    'tech.c5.title': 'Architecture Modulaire',
    'tech.c5.desc':  'Changez les têtes de nettoyage en quelques minutes. Conçu pour l\'efficacité sur des structures complexes et des types de surfaces variés.',
    'tech.c6.title': 'Zéro Exposition Humaine',
    'tech.c6.desc':  'Les opérations entièrement à distance éliminent tout risque pour les travailleurs sur les structures en hauteur et les environnements dangereux.',

    /* ── Capabilities ── */
    'cap.tag':   'Capacités',
    'cap.title': 'Capacités <span class="blue-text">Principales.</span>',
    'cap.drag':  'Glisser pour Explorer',
    'cap.c1.title': 'Nettoyage de Vitres en Hauteur',
    'cap.c1.desc':  'Nettoyage extérieur sans tache ni trace pour les gratte-ciels du panorama urbain.',
    'cap.c2.title': 'Restauration de Bâtiments & Façades',
    'cap.c2.desc':  'Lavage haute pression pour redonner l\'aspect d\'origine aux façades en pierre, brique et béton.',
    'cap.c3.title': 'Nettoyage de Flotte & Équipements Lourds',
    'cap.c3.desc':  'Élimination efficace de la saleté pour les flottes commerciales et les machines opérationnelles lourdes.',
    'cap.c4.title': 'Nettoyage Éolien & Solaire',
    'cap.c4.desc':  'Nettoyage sûr et efficace des champs de panneaux solaires et des éoliennes pour optimiser la production d\'énergie.',

    /* ── Zigzag section ── */
    'zz1.label':  'Aucun Échafaudage Requis',
    'zz1.title':  'Atteignez n\'importe quelle hauteur.<br /><span class="gradient-text">Sans le risque.</span>',
    'zz1.body':   'Nos drones éliminent le besoin d\'échafaudages, d\'accès par corde ou de nacelles élévatrices — réduisant les coûts d\'installation jusqu\'à 70% et supprimant tous les risques de chute pour votre équipe.',
    'zz1.b1':     'Déploiement sur toute façade en moins de 30 minutes',
    'zz1.b2':     'Certifié pour les bâtiments jusqu\'à 160m',
    'zz1.b3':     'Aucune perturbation pour les occupants',
    'zz1.cta':    'Obtenir une Évaluation Gratuite →',
    'zz1.stat1s': 'Échafaudage',
    'zz1.stat2s': 'Plus Rapide',
    'zz1.stat3s': 'Sécurisé',
    'zz1.tag1':   'Grande Hauteur',
    'zz1.tag2':   'Zéro Risque',
    'zz1.tag3':   'Entièrement à Distance',

    'zz2.label':  'Systèmes d\'Eau de Précision',
    'zz2.title':  'Projection puissante.<br /><span class="gradient-text">Contrôle précis.</span>',
    'zz2.body':   'Nos réseaux de buses haute pression délivrent jusqu\'à 150 bar de pression de nettoyage, tandis que le contrôle de débit intelligent assure une utilisation optimale de l\'eau — chaque goutte compte.',
    'zz2.b1':     '150 bar de pression',
    'zz2.b2':     '40% moins d\'eau vs méthodes traditionnelles',
    'zz2.b3':     'Motifs de projection ajustables selon le type de surface',
    'zz2.cta':    'En Savoir Plus sur Notre Technologie →',
    'zz2.stat1s': 'Bar PSI',
    'zz2.stat2s': 'Moins d\'Eau',
    'zz2.stat3s': 'Couverture',
    'zz2.tag1':   'Haute Pression',
    'zz2.tag2':   'Éco-Débit',
    'zz2.tag3':   'Adaptatif',

    'zz3.label':  'Opérations Éco-Responsables',
    'zz3.title':  'De meilleurs résultats.<br /><span class="eco-gradient-text">Meilleur pour la Terre.</span>',
    'zz3.body':   'Toute notre flotte fonctionne à l\'électricité avec zéro émission directe. Nous utilisons uniquement des solutions de nettoyage biodégradables, éco-certifiées, approuvées pour les environnements urbains.',
    'zz3.b1':     'Drones 100% électriques',
    'zz3.b2':     'Agents de nettoyage biodégradables, pH-neutres',
    'zz3.b3':     'Reporting conforme ESG pour chaque projet',
    'zz3.cta':    'Commencer le Nettoyage Écologique →',
    'zz3.stat1s': 'Émissions',
    'zz3.stat2s': 'Électrique',
    'zz3.stat3s': 'Agents',
    'zz3.tag1':   'Éco Certifié',
    'zz3.tag2':   'Zéro Carbone',
    'zz3.tag3':   'Carbone Sûr',

    /* ── Industries ── */
    'ind.tag':   'Industries',
    'ind.title': 'Conçu pour chaque<br /><span class="blue-text">secteur.</span>',
    'ind.desc':  'De l\'immobilier commercial aux installations industrielles — Sky Cleaner s\'adapte à votre environnement.',
    'ind.c1.title': 'Bâtiments Commerciaux',
    'ind.c1.desc':  'Façades vitrées, murs-rideaux et propriétés commerciales multi-étages nettoyés en toute sécurité et efficacité.',
    'ind.c2.title': 'Installations Industrielles',
    'ind.c2.desc':  'Entrepôts, usines et installations nécessitant un entretien extérieur régulier sans arrêt de production.',
    'ind.c3.title': 'Chantiers de Construction',
    'ind.c3.desc':  'Nettoyage post-construction avec un minimum de perturbation des opérations en cours et des délais serrés.',
    'ind.c4.title': 'Installations Solaires',
    'ind.c4.desc':  'Protocoles de nettoyage adaptés aux panneaux qui maintiennent l\'efficacité énergétique et maximisent la production.',
    'ind.c5.title': 'Infrastructure',
    'ind.c5.desc':  'Ponts, tours et structures complexes inaccessibles par les méthodes d\'échafaudage traditionnelles.',
    'ind.c6.title': 'Hôtellerie',
    'ind.c6.desc':  'Hôtels et stations maintenant un aspect extérieur impeccable avec un minimum de perturbation opérationnelle.',
    'ind.c7.title': 'Éoliennes',
    'ind.c7.desc':  'Nettoyage efficace par drone pour les éoliennes, améliorant les performances, la sécurité et la durée de vie opérationnelle sans interrompre la production d\'énergie.',

    /* ── Eco / Safety section ── */
    'eco.tag':   'Sécurité & Environnement',
    'eco.title': 'Sûr pour les personnes.<br /><span class="eco-gradient-text">Meilleur pour la planète.</span>',
    'eco.desc':  'Chaque mission est conçue pour protéger les travailleurs, les clients et l\'environnement — sans compromettre les résultats.',
    'eco.l1.title': 'Zéro exposition humaine en hauteur',
    'eco.l1.desc':  'Les opérations à distance éliminent tout risque pour les travailleurs au sol et en altitude.',
    'eco.l2.title': 'Systèmes de nettoyage économes en eau',
    'eco.l2.desc':  'Jusqu\'à 40% de réduction d\'eau par rapport au lavage haute pression conventionnel.',
    'eco.l3.title': 'Agents de nettoyage biodégradables',
    'eco.l3.desc':  'Solutions éco-certifiées, sans danger pour le ruissellement dans les systèmes de drainage urbain.',
    'eco.l4.title': 'Flotte à propulsion électrique',
    'eco.l4.desc':  'Zéro émission directe sur toutes les opérations de drone.',
    'eco.m1.label': 'Moins d\'Eau Utilisée',
    'eco.m2.label': 'Alimenté à l\'Électricité',
    'eco.m3.label': 'Travailleurs en Hauteur',

    /* ── Video section ── */
    'video.tag':   'Voyez-le en Action',
    'video.title': 'Regardez nos drones<br /><span class="gradient-text">nettoyer à grande échelle.</span>',
    'video.desc':  'Opérations réelles, résultats réels — voyez comment Sky Cleaner Services transforme les bâtiments à Djibouti.',

    /* ── Process section ── */
    'proc.tag':   'Comment Ça Marche',
    'proc.title': 'De l\'évaluation<br /><span class="blue-text">à l\'achèvement.</span>',
    'proc.desc':  'Un processus clair et structuré qui garantit des résultats — à chaque fois.',
    'proc.s1.title': 'Évaluation du Site',
    'proc.s1.desc':  'Notre équipe inspecte le site et conçoit un plan de vol drone personnalisé adapté à votre structure.',
    'proc.s2.title': 'Déploiement des Drones',
    'proc.s2.desc':  'Les drones calibrés avec précision sont déployés avec des solutions de nettoyage et des réglages de pression optimisés.',
    'proc.s3.title': 'Surveillance en Direct',
    'proc.s3.desc':  'Les données de capteurs en temps réel et les flux vidéo assurent le contrôle qualité tout au long de l\'opération.',

    /* ── Contact section ── */
    'contact.tag':   'Commencer',
    'contact.title': 'Prêt à nettoyer<br /><span class="blue-text">à grande échelle ?</span>',
    'contact.desc':  'Parlez-nous de votre projet et nous déploierons une solution adaptée à vos besoins et délais.',
    'contact.badge1': 'Évaluation de site gratuite',
    'contact.badge2': 'Aucun coût d\'échafaudage',
    'contact.badge3': 'Opérateurs assurés et certifiés',
    'contact.badge4': 'Devis sous 24 heures',
    'form.fname':      'Prénom',
    'form.lname':      'Nom de Famille',
    'form.email':      'Adresse E-mail',
    'form.phone':      'Numéro de Téléphone',
    'form.btype':      'Type de Bâtiment',
    'form.btype.ph':   'Sélectionnez votre type de bâtiment',
    'form.btype.commercial':     'Bâtiment Commercial',
    'form.btype.industrial':     'Installation Industrielle',
    'form.btype.residential':    'Complexe Résidentiel',
    'form.btype.infrastructure': 'Infrastructure / Pont',
    'form.btype.solar':          'Installation Solaire',
    'form.btype.other':          'Autre',
    'form.message':    'Détails du Projet',
    'form.message.ph': 'Décrivez votre propriété, sa taille et vos besoins de nettoyage...',
    'form.submit':     'Demander un Devis',

    /* ── About page ── */
    'about.page.title':    'À Propos',
    'about.page.subtitle': 'Transformer l\'industrie du nettoyage extérieur à Djibouti.',
    'about.s1.title': 'Présentation de l\'Entreprise',
    'about.s1.p1':    '<strong>Sky Cleaner Services est une entreprise moderne de nettoyage extérieur par drone dont le siège est à Djibouti Ville, Djibouti.</strong> L\'entreprise se spécialise dans la fourniture de solutions de nettoyage innovantes, sûres et efficaces pour les immeubles de grande hauteur, les installations industrielles et les infrastructures d\'énergie renouvelable.',
    'about.s1.p2':    'En combinant la technologie drone avancée avec des systèmes de nettoyage professionnels, Sky Cleaner Services élimine le besoin d\'échafaudages traditionnels, de grues et de travaux manuels à haut risque.',
    'about.s1.p3':    'Nos solutions sont conçues pour offrir des performances élevées, des risques opérationnels réduits et des services de nettoyage respectueux de l\'environnement à travers Djibouti. Nous servons fièrement des clients dans les secteurs commercial, industriel, gouvernemental et des énergies renouvelables.',
    'about.s2.title': 'Notre Mission',
    'about.s2.p1':    'Devenir la première entreprise de nettoyage extérieur par drone de Djibouti en fournissant des solutions innovantes, fiables et écologiques tout en maintenant les normes les plus élevées de sécurité et d\'efficacité.',
    'about.s3.title': 'Notre Vision',
    'about.s3.p1':    'Notre vision est de transformer l\'industrie du nettoyage extérieur à Djibouti et dans la région en introduisant une technologie aérienne de pointe qui améliore la sécurité, l\'efficacité et la durabilité environnementale.',
    'about.s4.title': 'Pourquoi Choisir Sky Cleaner Services',
    'about.s4.p1':    'Les clients choisissent Sky Cleaner Services car nous proposons des approches innovantes qui permettent aux entreprises d\'entretenir leurs propriétés plus efficacement et avec un risque considérablement réduit.',
    'about.s4.li1':   'Opérations de nettoyage plus rapides',
    'about.s4.li2':   'Conditions de travail plus sûres',
    'about.s4.li3':   'Coûts opérationnels réduits',
    'about.s4.li4':   'Technologie drone avancée',
    'about.s4.li5':   'Service professionnel et fiable',
    'about.s4.li6':   'Solutions de nettoyage respectueuses de l\'environnement',
    'about.stat.gov':     '🇩🇯 Autorisé par le Gouvernement de Djibouti',
    'about.stat.gov.sub': 'L\'entreprise est en conformité avec les réglementations de la République de Djibouti.',

    /* ── Contact page header ── */
    'contact.page.title':    'Nous Contacter',
    'contact.page.subtitle': 'Nous sommes là pour vous aider à nettoyer à grande échelle.',

    /* ── Privacy page ── */
    'privacy.page.title': 'Politique de Confidentialité',
    'privacy.s1.title':   '1. Informations que Nous Collectons',
    'privacy.s1.p1':      'Sky Cleaner Services respecte votre vie privée. Nous collectons les informations personnelles que vous nous fournissez directement via les formulaires de contact sur notre site Web. Cela peut inclure votre nom, adresse e-mail, numéro de téléphone et détails du projet.',
    'privacy.s2.title':   '2. Comment Nous Utilisons Vos Informations',
    'privacy.s2.p1':      'Nous utilisons les informations collectées exclusivement pour communiquer avec vous au sujet de vos projets, coordonner les devis et fournir nos services de nettoyage par drone.',

    /* ── Terms page ── */
    'terms.page.title': 'Conditions Générales',
    'terms.s1.title':   '1. Introduction',
    'terms.s1.p1':      'Bienvenue chez Sky Cleaner Services. En utilisant notre site Web et nos services, vous acceptez de vous conformer aux conditions générales décrites ici.',
    'terms.s2.title':   '2. Services Fournis',
    'terms.s2.p1':      'Nous fournissons des solutions de nettoyage extérieur par drone à travers Djibouti. Les délais, coûts et conditions spécifiques du projet seront fournis par écrit après une évaluation du site.',

    /* ── Toast messages ── */
    'toast.sending':   'Envoi en cours…',
    'toast.success':   '✓ Demande de devis envoyée ! Nous vous contacterons dans les 24 heures.',
    'toast.err.name':  'Veuillez entrer votre prénom.',
    'toast.err.email': 'Veuillez entrer un e-mail valide.',
  }
};

/* ============================================================
   CORE ENGINE
   ============================================================ */

let currentLang = localStorage.getItem('scs-lang') || 'en';

function t(key) {
  return TRANSLATIONS[currentLang][key] || TRANSLATIONS['en'][key] || key;
}

function applyTranslations() {
  /* textContent replacement */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  /* innerHTML replacement (for elements with embedded HTML like <span> or <br>) */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });

  /* placeholder replacement */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });

  /* aria-label replacement */
  document.querySelectorAll('[data-i18n-label]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nLabel));
  });

  /* select option text */
  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    el.textContent = t(el.dataset.i18nOpt);
  });

  /* href switching for language-specific links (e.g. Watch Video EN only) */
  document.querySelectorAll('[data-href-en]').forEach(el => {
    const enHref = el.dataset.hrefEn;
    const frHref = el.dataset.hrefFr || enHref;
    el.href = currentLang === 'en' ? enHref : frHref;
    if (currentLang === 'en') {
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    } else {
      el.removeAttribute('target');
      el.removeAttribute('rel');
    }
  });

  /* Update <html lang=""> attribute */
  document.documentElement.lang = currentLang;

  /* Switch video src based on language */
  const videoSection = document.getElementById('in-action');
  const langVideo = document.getElementById('langVideo');
  if (videoSection) {
    videoSection.style.display = '';
    if (langVideo) {
      const videoSrc = currentLang === 'fr'
        ? 'https://www.youtube.com/embed/ysJCpYYwZWQ?si=n7fNIlEfHJ4sMKmB'
        : 'https://www.youtube.com/embed/xHbUwQtd4d0?si=E3XWIEJpnjjDUMbV';
      if (langVideo.src !== videoSrc) langVideo.src = videoSrc;
    }
  }

  /* Sync flag button icon */
  const LANG_FLAGS = { en: '🇨🇦', fr: '🇫🇷' };
  document.querySelectorAll('.flag-current').forEach(el => {
    el.textContent = LANG_FLAGS[currentLang] || LANG_FLAGS.en;
  });

  /* Sync dropdown items active state */
  document.querySelectorAll('.lang-dropdown-item').forEach(item => {
    item.classList.toggle('active', item.dataset.lang === currentLang);
  });

  /* Sync mobile flag buttons active state */
  document.querySelectorAll('.mobile-flag-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('scs-lang', lang);
  applyTranslations();
}

function toggleLang() {
  setLang(currentLang === 'en' ? 'fr' : 'en');
}

/* ============================================================
   CONTACT FORM — TRANSLATED MESSAGES
   ============================================================ */
function setupTranslatedForm() {
  const form  = document.getElementById('quoteForm');
  const toast = document.getElementById('formToast');
  if (!form || !toast) return;

  function showToast(msg, isError = false) {
    toast.textContent = msg;
    toast.style.background = isError ? '#3a1a1a' : '#1a3a1a';
    toast.style.color      = isError ? '#f08080' : '#7ee87e';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4200);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = form.firstName.value.trim();
    const email     = form.email.value.trim();
    if (!firstName)                     { showToast(t('toast.err.name'),  true); return; }
    if (!email || !email.includes('@')) { showToast(t('toast.err.email'), true); return; }

    const btn     = form.querySelector('.btn-form-submit');
    const btnText = btn.querySelector('.btn-text');
    const btnIcon = btn.querySelector('.btn-icon');
    btn.disabled = true;
    btnText.textContent = t('toast.sending');
    btnIcon.textContent = '⏳';

    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      btnText.textContent = t('form.submit');
      btnIcon.textContent = '→';
      showToast(t('toast.success'));
    }, 1600);
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  /* ── Flag dropdown: open/close ── */
  document.querySelectorAll('.lang-dropdown').forEach(dropdown => {
    const btn  = dropdown.querySelector('.lang-flag-btn');
    const menu = dropdown.querySelector('.lang-dropdown-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('open');
      /* Close all other open dropdowns first */
      document.querySelectorAll('.lang-dropdown.open').forEach(d => d.classList.remove('open'));
      if (!isOpen) {
        dropdown.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      } else {
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    /* Close on item pick */
    menu.querySelectorAll('.lang-dropdown-item').forEach(item => {
      item.addEventListener('click', () => {
        setLang(item.dataset.lang);
        dropdown.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  });

  /* ── Mobile flag buttons ── */
  document.querySelectorAll('.mobile-flag-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  /* ── Close dropdown when clicking outside ── */
  document.addEventListener('click', () => {
    document.querySelectorAll('.lang-dropdown.open').forEach(d => {
      d.classList.remove('open');
      const b = d.querySelector('.lang-flag-btn');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  });

  applyTranslations();
  setupTranslatedForm();
});
