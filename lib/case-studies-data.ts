export interface CaseStudy {
  id: string
  title: string
  subtitle: string
  category: 'Coaching' | 'Mentorship' | 'Leadership'
  summary: string
  outcome: string
  duration: string
  tags: string[]
  color: string
  story: {
    challenge: string
    approach: string[]
    results: string[]
    impact: string
    testimonial?: {
      quote: string
      author: string
    }
  }
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'arash-disney',
    title: 'Rebuilding Confidence After Interview Failures',
    subtitle: 'From Self-Doubt to Dream Job at Disney',
    category: 'Coaching',
    summary: 'After failing multiple technical interviews and experiencing a toxic work environment, Arash had very low self-esteem. Through intensive interview prep, mindset coaching, and tailored project development, he rebuilt his confidence and landed his dream role at Disney.',
    outcome: 'Hired at Disney',
    duration: '2 months',
    tags: ['Interview Prep', 'Mindset Coaching', 'Portfolio Development', 'Technical Skills'],
    color: 'from-blue-500 to-indigo-600',
    story: {
      challenge: 'Arash came to me after a series of failed technical interviews and a demoralizing experience at his previous company. His confidence was shattered, and he struggled to see his own worth as a developer. The constant rejection had created a negative feedback loop affecting his interview performance.',
      approach: [
        'Conducted thorough technical interview prep sessions, identifying specific weak points and building targeted practice problems',
        'Implemented daily journaling exercises to track progress and shift mindset from fixed to growth-oriented',
        'Built portfolio projects specifically aligned with Disney\'s tech stack and values',
        'Held mock interviews with detailed feedback, celebrating incremental improvements',
        'Had meaningful conversations about worth, progress, and the nature of interviews as a skill to be learned'
      ],
      results: [
        'Each prep session showed measurable improvement in both technical skills and confidence',
        'Developed three portfolio projects showcasing React, Node.js, and creative problem-solving',
        'Transformed interview anxiety into excited anticipation',
        'Received offer from Disney after two months of intensive collaboration',
        'Arash began to appreciate his own progress and recognize his worth independent of outcomes'
      ],
      impact: 'Arash didn\'t just land a job at Disney—he fundamentally shifted how he views himself and his capabilities. The mindset work proved as valuable as the technical preparation, and he now approaches challenges with resilience and self-compassion.',
      testimonial: {
        quote: 'Joey helped me see that my worth isn\'t determined by interview outcomes. The technical prep was excellent, but the mindset coaching changed my life.',
        author: 'Arash, Software Engineer at Disney'
      }
    }
  },
  {
    id: 'jacob-career-transition',
    title: 'Career Change from Tradesman to Developer',
    subtitle: 'From Electrician to Web Developer in 5 Months',
    category: 'Mentorship',
    summary: 'Jacob transitioned from a career as an electrician to web development. Through building a meaningful personal project (Prayer Connect app), gaining experience as a CodeCompass intern on FridgeRaider, he landed his first software development role in just 5 months.',
    outcome: 'First Software Development Job',
    duration: '5 months',
    tags: ['Career Transition', 'Web Development', 'Project-Based Learning', 'Internship'],
    color: 'from-green-500 to-teal-600',
    story: {
      challenge: 'Jacob wanted to transition from his electrician career into web development but had no formal experience or portfolio. Despite strong motivation, he struggled to get interviews due to the "experience required" paradox faced by career changers.',
      approach: [
        'Taught web development fundamentals through building his own Prayer Connect app—a project he was personally passionate about',
        'Provided hands-on mentorship, explaining concepts in context rather than through abstract tutorials',
        'Hired him as a CodeCompass intern to gain legitimate work experience',
        'Built FridgeRaider together just as AI was emerging on the scene, exposing him to cutting-edge technologies',
        'Helped him articulate his transferable skills from electrical work (problem-solving, attention to detail, systems thinking)'
      ],
      results: [
        'Completed Prayer Connect app with user authentication, database integration, and responsive design',
        'Gained real-world team experience through the FridgeRaider internship',
        'Built a portfolio demonstrating both independent and collaborative work',
        'Developed modern skills in React, Next.js, and AI integration',
        'Landed first software development job after 5 months of intensive learning'
      ],
      impact: 'Jacob\'s successful transition demonstrates that career changes are possible with the right mentorship and project-based learning. His electrician background actually became an asset, bringing a unique perspective to software problem-solving.',
    }
  },
  {
    id: 'jielin-pm-pivot',
    title: 'Finding the Right Career Path Through Self-Discovery',
    subtitle: 'From Software Dreams to Tech Sales Success',
    category: 'Coaching',
    summary: 'Jielin initially wanted a software development job, but through our conversations, we discovered her true strengths aligned with project management and communication. By focusing on PM skills through app development, she found her path to a fulfilling career in tech sales.',
    outcome: 'Tech Sales Career via PM Internship',
    duration: '4 months',
    tags: ['Career Guidance', 'Project Management', 'Self-Discovery', 'Tech Sales'],
    color: 'from-purple-500 to-pink-600',
    story: {
      challenge: 'Jielin was determined to become a software developer, but something felt off. While she could learn the technical skills, our conversations revealed her energy came from organizing, communicating, and connecting people—not from deep technical problem-solving.',
      approach: [
        'Had honest conversations about what energizes vs. drains different types of work',
        'Reframed app development as a vehicle for learning project management rather than coding',
        'Taught PM fundamentals: user stories, sprint planning, stakeholder communication, roadmap development',
        'Built her app together, but focused on the "why" and "what" over the "how"',
        'Helped her see that technology careers extend far beyond engineering roles'
      ],
      results: [
        'Recognized her natural talent for understanding user needs and translating them into requirements',
        'Developed strong project management portfolio through documented app development process',
        'Secured a PM internship that showcased her organizational and communication skills',
        'Transitioned into tech sales where she excels at understanding technical products and communicating value',
        'Found genuine fulfillment in her career path rather than forcing an ill-fitting role'
      ],
      impact: 'Jielin\'s story highlights the importance of honest guidance over simply teaching what someone thinks they want. Sometimes the greatest service is helping people discover where they truly belong.',
    }
  },
  {
    id: 'ekaterina-tdd-mastery',
    title: 'Leveling Up Through Software Craftsmanship',
    subtitle: 'TDD Mastery to Better Opportunities',
    category: 'Coaching',
    summary: 'Through consistent pair programming sessions over 7 months, Ekaterina developed deep expertise in Test-Driven Development while building her own e-reader and smart TV interface. This led to a more aligned, higher-paying role.',
    outcome: 'Higher-Paying Aligned Position',
    duration: '7 months',
    tags: ['TDD', 'Pair Programming', 'Software Craftsmanship', 'Career Growth'],
    color: 'from-orange-500 to-red-600',
    story: {
      challenge: 'Ekaterina was a capable developer but felt stuck in her current role without a clear path to advancement. She wanted to level up her skills and find work that was both better-paying and more aligned with her values.',
      approach: [
        'Established consistent weekly pair programming sessions over 7 months',
        'Practiced rigorous Test-Driven Development on real projects: e-reader app and smart TV interface',
        'Focused on software craftsmanship: clean code, refactoring, design patterns',
        'Built projects that showcased both technical depth and product thinking',
        'Prepared for interviews by discussing architectural decisions and trade-offs in her projects'
      ],
      results: [
        'Developed deep mastery of TDD practices and the confidence to advocate for them',
        'Created two sophisticated portfolio pieces demonstrating advanced front-end skills',
        'Learned to articulate technical decisions clearly, crucial for senior-level interviews',
        'Landed a role with better compensation, better culture fit, and more interesting technical challenges',
        'Became a TDD advocate in her new team, influencing development practices'
      ],
      impact: 'The consistent, long-term mentorship allowed for deep skill development rather than surface-level learning. Ekaterina\'s investment in proper software practices paid dividends in both career advancement and daily job satisfaction.',
    }
  },
  {
    id: 'davide-personal-brand',
    title: 'Breaking Into Development Through Personal Branding',
    subtitle: 'Tech-Adjacent to Software Developer in 1 Month',
    category: 'Coaching',
    summary: 'Davide worked in a tech-adjacent role but wanted to transition into software development. By focusing purely on personal branding—portfolio, resume, LinkedIn, and a compelling "brag list"—he landed his first software job within a month.',
    outcome: 'First Developer Role in 1 Month',
    duration: '1 month',
    tags: ['Personal Branding', 'Career Transition', 'Portfolio', 'Resume Optimization'],
    color: 'from-yellow-500 to-orange-600',
    story: {
      challenge: 'Davide had technical skills from his tech-adjacent role but wasn\'t being seen as a "real" developer by hiring managers. His resume, portfolio, and online presence didn\'t effectively communicate his capabilities or translate his experience into developer-relevant achievements.',
      approach: [
        'Completely overhauled his portfolio website to showcase technical projects and problem-solving',
        'Rewrote his resume to translate tech-adjacent responsibilities into developer-relevant accomplishments',
        'Optimized his LinkedIn profile with strategic keywords and compelling narrative',
        'Created a comprehensive "brag list" documenting every technical achievement, tool used, and problem solved',
        'Aligned his personal brand messaging consistently across all platforms'
      ],
      results: [
        'Transformed his online presence from "tech person" to "software developer"',
        'Resume now clearly demonstrated transferable technical skills and impact',
        'LinkedIn profile began attracting recruiter attention within days',
        'Portfolio website effectively showcased his capabilities and problem-solving approach',
        'Landed first software development role within one month of branding overhaul'
      ],
      impact: 'Davide\'s rapid success demonstrates that sometimes the skills are already there—they just need to be properly packaged and communicated. Personal branding isn\'t vanity; it\'s translation.',
    }
  },
  {
    id: 'community-collaboration',
    title: 'Transforming Conflict Into Collaboration',
    subtitle: 'From Discord Enemies to Productive Partners',
    category: 'Leadership',
    summary: 'Two members with opposing viewpoints and different technical focuses met in our Discord community and immediately clashed. Through individual conversations and facilitated collaboration on their respective projects (a chess variant and a gamified habit tracker), they went from conflict to becoming collaborative peers over the course of a year.',
    outcome: 'Productive Collaboration Despite Differences',
    duration: '1 year',
    tags: ['Community Building', 'Conflict Resolution', 'Collaboration', 'Personal Growth'],
    color: 'from-indigo-500 to-purple-600',
    story: {
      challenge: 'Two developers joined the Discord community coaching group with different skill sets and opposite worldviews. Whenever certain topics came up in group sessions, they would clash intensely. Both were ready to quit because they couldn\'t stand each other.',
      approach: [
        'Spoke to each individually about the conflict and their goals for being in the community',
        'Facilitated collaboration on their personal projects: a chess variant and a gamified habit tracker',
        'Highlighted how their complementary skills (one\'s logic/backend focus, the other\'s design/UX strengths) could benefit each other',
        'Created opportunities for them to help each other without forcing divisive discussions',
        'Modeled respectful disagreement and focus on shared values (craftsmanship, growth, creativity)',
        'Allowed relationship to develop naturally through working on meaningful projects together'
      ],
      results: [
        'The backend-focused developer received valuable design feedback that elevated their chess variant UI',
        'The design-focused developer got backend architecture guidance that made their habit tracker more robust',
        'They began to see each other as whole people rather than opposing viewpoints',
        'Started collaborating voluntarily outside of formal group sessions',
        'Developed mutual respect and learned to work together productively despite differences',
        'Both projects reached completion with better quality thanks to their collaboration'
      ],
      impact: 'This transformation exemplifies the power of shared purpose and mutual respect. When people work together on meaningful projects, surface-level differences become less important than human connection. The Discord community became a model for productive collaboration across differences.',
    }
  },
  {
    id: 'amazon-one-medical',
    title: 'Leading Healthcare Product Launch at Scale',
    subtitle: 'Amazon One Medical Integration Success',
    category: 'Leadership',
    summary: 'Led frontend development and architecture for the One Medical launch as part of Prime health benefits. Managed constantly changing designs and requirements, led 5 junior developers, created a collaborative culture with pair programming, and delivered on time.',
    outcome: 'Successful On-Time Launch',
    duration: '18 months',
    tags: ['Frontend Architecture', 'Team Leadership', 'Healthcare', 'Agile'],
    color: 'from-cyan-500 to-blue-600',
    story: {
      challenge: 'The One Medical integration into Amazon Prime was a high-stakes, high-visibility project with constantly shifting requirements, evolving designs, and tight deadlines. I needed to lead a team of 5 junior developers while establishing frontend architecture for a healthcare product where mistakes could have serious consequences.',
      approach: [
        'Established robust frontend architecture that could adapt to changing requirements without complete rewrites',
        'Created a collaborative culture centered on pair programming and knowledge sharing',
        'Implemented daily standups focused on blockers and learning opportunities, not just status updates',
        'Mentored junior developers through code reviews, pairing sessions, and architectural discussions',
        'Built strong relationships with design and product teams to anticipate changes and influence decisions',
        'Advocated for user needs and technical best practices even when under deadline pressure'
      ],
      results: [
        'Successfully launched One Medical integration on schedule despite scope changes',
        'All 5 junior developers grew significantly in both technical skills and professional maturity',
        'Established frontend patterns and component library reused across Amazon Health initiatives',
        'Maintained high code quality and test coverage throughout rapid iteration',
        'Created a team culture where people felt safe to ask questions and share ideas',
        'Product received positive user feedback for intuitive interface and reliable performance'
      ],
      impact: 'This experience demonstrated that technical leadership is as much about people and process as it is about code. By investing in team culture and mentorship, we delivered a complex healthcare product while developing the next generation of senior engineers.',
    }
  },
  {
    id: 'battleface-modernization',
    title: 'Transforming Legacy Systems and Team Culture',
    subtitle: 'Battleface Frontend Modernization',
    category: 'Leadership',
    summary: 'Inherited a legacy Angular application with massive tech debt, frequent production issues, and teams stepping on each other. Modernized the tech stack through microfrontends with Webpack Module Federation in an Nx monorepo, enacted deployment processes, added no-code E2E tests, and streamlined project management.',
    outcome: 'Modern, Scalable Architecture',
    duration: '12 months',
    tags: ['Legacy Modernization', 'Microfrontends', 'Process Improvement', 'Agile Training'],
    color: 'from-emerald-500 to-green-600',
    story: {
      challenge: 'Battleface was stuck on an outdated Angular version with accumulated technical debt causing frequent production issues. Multiple development teams worked in the same codebase without clear boundaries, constantly creating merge conflicts and stepping on each other\'s work. Project management was chaotic with inaccurate estimates and misaligned expectations between engineering, product, and design.',
      approach: [
        'Audited existing codebase and deployment processes to identify highest-impact improvements',
        'Enacted formal production deployment process with staging environments and release checklists',
        'Introduced no-code E2E testing framework and onboarded product and QA teams to create tests themselves',
        'Architected migration strategy using microfrontends with Webpack Module Federation',
        'Set up Nx monorepo to manage multiple frontend applications with shared libraries',
        'Taught product and design teams agile methodologies and estimation techniques',
        'Established cross-functional communication rituals to align expectations early'
      ],
      results: [
        'Production incidents decreased by 70% within first quarter of new deployment process',
        'Product and QA teams created comprehensive E2E test suite without engineering bottleneck',
        'Successfully migrated off legacy Angular app to modern microfrontend architecture',
        'Multiple teams could work independently without merge conflicts or coordination overhead',
        'Estimate accuracy improved dramatically, rebuilding trust between engineering and stakeholders',
        'Shared component library ensured consistent UX across all frontend applications',
        'Engineering team morale increased significantly with reduced firefighting and clearer processes'
      ],
      impact: 'The Battleface modernization proved that technical and organizational problems are deeply intertwined. By addressing processes, communication, and architecture simultaneously, we transformed a chaotic environment into a sustainable, scalable development organization.',
    }
  },
  {
    id: 'melvin-progression',
    title: 'Multi-Year Journey from Bootcamp to Professional',
    subtitle: 'From Student to Key Team Member',
    category: 'Mentorship',
    summary: 'First met Melvin as his mentor in an Amazon coding bootcamp where he showed exceptional potential. After the bootcamp, he reached out for job search guidance, and I invited him into my new Discord community. Through building personal projects and portfolio work, he evolved from mentee to collaborator at CleverApply, and eventually became my go-to UI developer and designer at CodeCompass.',
    outcome: 'Key CodeCompass Team Member',
    duration: '2+ years',
    tags: ['Long-term Mentorship', 'Career Development', 'UI/UX Design', 'Portfolio Building'],
    color: 'from-pink-500 to-rose-600',
    story: {
      challenge: 'Melvin had completed an Amazon coding bootcamp and showed great promise, but like many bootcamp graduates, he needed guidance to translate that potential into real-world opportunities. He reached out months after the bootcamp seeking help with his job search and career direction.',
      approach: [
        'Invited him into the Discord community I was building to create a supportive learning environment',
        'Offered free mentorship focused on building meaningful personal projects rather than just following tutorials',
        'Helped him create a portfolio that showcased his unique strengths in UI development and design',
        'Provided early paid opportunities at CleverApply to gain real client work experience',
        'Gradually increased responsibility as his skills and confidence grew',
        'Recognized and nurtured his natural talent for design and user interface development',
        'Cultivated a long-term relationship that evolved from mentor-mentee to trusted collaborator'
      ],
      results: [
        'Built a compelling portfolio through personal projects that demonstrated both technical skill and design sensibility',
        'Started with minor contributions at CleverApply, learning professional development practices',
        'Became an integral part of CleverApply\'s early success through quality UI work',
        'Developed expertise in modern frontend frameworks and design systems',
        'Evolved into my go-to UI developer and designer at CodeCompass',
        'Contributed to multiple successful projects with consistent, high-quality design work',
        'Demonstrated that bootcamp education plus dedicated mentorship can lead to exceptional outcomes'
      ],
      impact: 'Melvin\'s journey exemplifies the power of long-term mentorship and incremental growth. By starting with personal projects, progressing to minor paid work, and gradually taking on more responsibility, he built both skills and confidence. What began as bootcamp mentorship evolved into a genuine professional partnership, proving that investing in people\'s potential pays dividends over time.',
    }
  },
  {
    id: 'ben-adhd-chess',
    title: 'Turning Passion Into Focus and Career Growth',
    subtitle: 'ADHD Developer Builds Chess Variant & Lands Internship',
    category: 'Mentorship',
    summary: 'Ben struggled with ADHD and had minimal coding knowledge when we met. By channeling his passion for chess into building his own chess variant, he learned to maintain focus, deployed and hosted his game, integrated AI features, and continues iterating on new projects. He recently landed his first coding internship.',
    outcome: 'First Coding Internship',
    duration: '8 months',
    tags: ['ADHD Support', 'Passion-Driven Learning', 'Game Development', 'AI Integration'],
    color: 'from-violet-500 to-purple-600',
    story: {
      challenge: 'Ben came to me with barely any coding knowledge and struggled significantly with ADHD, making traditional learning approaches ineffective. He had difficulty maintaining focus on abstract tutorials and needed a different path into software development.',
      approach: [
        'Identified his deep passion for chess as the foundation for learning',
        'Structured mentorship around building his own chess variant rather than generic projects',
        'Used his interest to create natural focus and motivation despite ADHD challenges',
        'Taught deployment and hosting through the practical need to share his game',
        'Introduced AI integration as a way to enhance his project and learn cutting-edge technologies',
        'Encouraged continuous iteration to build sustainable learning habits',
        'Supported exploration of other project ideas as his confidence grew'
      ],
      results: [
        'Successfully built, deployed, and hosted his own chess variant from scratch',
        'Integrated AI features, demonstrating ability to work with modern technologies',
        'Developed consistent coding practice despite ADHD through passion-driven focus',
        'Began building additional projects, showing growing independence and creativity',
        'Landed first coding internship, validating his skills and growth',
        'Discovered effective learning strategies that work with his ADHD rather than against it',
        'Built genuine confidence in his ability to learn and create'
      ],
      impact: 'Ben\'s journey demonstrates that neurodivergence isn\'t a barrier to software development—it just requires finding the right approach. By building on genuine passion rather than forcing traditional learning paths, he transformed ADHD from obstacle into advantage through hyperfocus on projects he cared about.',
    }
  },
  {
    id: 'africa-bridge-volunteer',
    title: 'Building Technology for Social Impact',
    subtitle: 'Data System for Rural Tanzania Education & Development',
    category: 'Leadership',
    summary: 'Created a remote-friendly data collection system for Africa Bridge to gather information from villagers in rural Tanzania and transmit it to offices in Portland. This enabled grant funding acquisition for programs creating cow, chicken, and avocado co-ops to promote sustainable business growth and provide education for children in the region.',
    outcome: 'Successful Grant Funding System',
    duration: '3 months',
    tags: ['Volunteer Work', 'Social Impact', 'Remote Systems', 'International Development'],
    color: 'from-amber-500 to-orange-600',
    story: {
      challenge: 'Africa Bridge needed a way to collect and manage data from remote villages in rural Tanzania to support their grant applications for sustainable development programs. Traditional data collection methods were inefficient and made it difficult to demonstrate program impact to funders in Portland.',
      approach: [
        'Designed a remote-friendly data collection system that worked with limited internet connectivity',
        'Created simple, intuitive interfaces for field workers to gather villager information',
        'Built reliable data transmission from rural Tanzania to Portland offices',
        'Ensured system could document impact of co-op programs (cow, chicken, avocado)',
        'Structured data to align with grant funding requirements and reporting needs',
        'Provided training and documentation for non-technical staff',
        'Volunteered time and expertise to support meaningful social impact work'
      ],
      results: [
        'Successfully deployed data collection system in rural Tanzania',
        'Enabled consistent, reliable data flow from villages to Portland headquarters',
        'Provided quantifiable metrics for grant applications and program evaluation',
        'Supported funding acquisition for sustainable business co-ops',
        'Helped document educational outcomes for children in the program',
        'Created scalable system that could grow with program expansion',
        'Demonstrated how technology can enable international development work'
      ],
      impact: 'This project exemplifies technology\'s potential for social good. By creating infrastructure that worked within real-world constraints of rural Tanzania, the system enabled Africa Bridge to secure funding that directly improved lives through sustainable economic development and education. Sometimes the most meaningful code isn\'t the most technically complex.',
    }
  },
  {
    id: 'johnpaul-game-masters',
    title: 'Learning Through Building What You Love',
    subtitle: 'From Struggling Student to Georgia Tech Master\'s Program',
    category: 'Coaching',
    summary: 'John-Paul struggled to learn software development through traditional methods. By helping him create his own game—something he was passionate about—he finally grasped programming concepts. This success led to acceptance into the prestigious Online Master of Computer Science program at Georgia Institute of Technology.',
    outcome: 'Georgia Tech OMSCS Acceptance',
    duration: '6 months',
    tags: ['Game Development', 'Project-Based Learning', 'Academic Achievement', 'CS Education'],
    color: 'from-sky-500 to-blue-600',
    story: {
      challenge: 'John-Paul had tried repeatedly to learn software development through conventional tutorials and courses but couldn\'t make the concepts stick. He was frustrated and close to giving up on his goal of working in technology.',
      approach: [
        'Identified his passion for gaming as the vehicle for learning programming',
        'Shifted focus from abstract tutorials to building his own game',
        'Taught programming concepts in the context of game mechanics he wanted to create',
        'Broke down complex problems into game features he could visualize and understand',
        'Celebrated small wins as game features came to life',
        'Used the project to build both technical skills and a compelling portfolio',
        'Supported his application to Georgia Tech\'s competitive master\'s program'
      ],
      results: [
        'Successfully built his own game, finally understanding programming fundamentals',
        'Concepts that seemed impossible through tutorials made sense in game context',
        'Developed problem-solving skills through real, meaningful challenges',
        'Created a portfolio piece that demonstrated both technical ability and creativity',
        'Gained confidence in his ability to learn and build software',
        'Accepted into Georgia Institute of Technology\'s Online Master of Computer Science program',
        'Transformed from struggling beginner to graduate student at a top-tier program'
      ],
      impact: 'John-Paul\'s transformation proves that learning methods matter as much as aptitude. When education aligns with genuine interest, seemingly impossible concepts become accessible. His acceptance to Georgia Tech\'s competitive program validated that passion-driven, project-based learning can be more effective than traditional approaches.',
    }
  }
]
