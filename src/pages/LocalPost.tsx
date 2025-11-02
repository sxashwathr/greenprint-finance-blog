import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export function LocalPost() {
  const { slug } = useParams();
  
  const renderContent = () => {
    switch(slug) {
      case "local-business-spotlight":
        return (
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-lg text-emerald-700 mb-6">
              Discover how investing in your local community can create lasting financial benefits while strengthening neighborhood economies and building meaningful connections.
            </p>
            
            <p className="mb-6 text-foreground">
              Have you ever considered that your spending habits could be a powerful tool for both personal financial growth and community development? When you choose to support local businesses, you're not just making a purchase—you're making an investment in your community's economic future while often receiving superior value and service in return.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">The Economic Multiplier Effect</h3>
            
            <p className="mb-6 text-foreground">
              Local spending creates what economists call the "multiplier effect." When you spend $100 at a local business, studies show that approximately $68 stays within your local economy, compared to only $43 when spent at a national chain. This money circulates through local suppliers, employees, and other businesses, creating a ripple effect that strengthens your entire community's financial foundation.
            </p>
            
            <p className="mb-6 text-foreground">
              This multiplier effect can directly benefit your personal finances through increased property values, more local job opportunities, and a more robust local economy that supports diverse income streams and investment opportunities.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Building Your Local Network</h3>
            
            <p className="mb-6 text-foreground">
              Supporting local businesses isn't just about transactions—it's about building relationships that can enhance your financial opportunities. Local business owners often become valuable networking contacts, potential business partners, or sources of referrals and recommendations that can advance your career or entrepreneurial goals.
            </p>
            
            <p className="mb-6 text-foreground">
              These relationships can lead to insider knowledge about local investment opportunities, job openings, or business ventures before they become widely known, giving you a competitive advantage in your financial planning and career development.
            </p>
          </div>
        );

      case "dfw-teens-money-moves":
        return (
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-lg text-emerald-700 mb-6">
              If you live in the Dallas Fort Worth area, you don't have to wait until after high school to start earning money, gaining real work experience, and building the kind of financial foundation that many adults wish they had started earlier. There are local programs designed just for teens like you. These opportunities pay you, teach professional skills, and help you build a strong start toward financial independence.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Jump Into Paid Internships</h3>
            
            <p className="mb-6 text-foreground">
              One of the best options is the Dallas Works program. It is open to young people ages 16 to 21 in Dallas County. This summer program places students in internships where they work between 20 and 40 hours per week for six to eight weeks in companies, nonprofits, or city offices. It also includes workshops on résumé writing, interviewing, and computer skills.
            </p>
            
            <p className="mb-6 text-foreground">
              In Fort Worth, the City of Fort Worth's NextGen Ambassador Program gives high schoolers paid, part time jobs for eight weeks at about 20 hours per week. Students earn around $18 per hour and also attend weekly professional development sessions. Both programs help teens earn money and gain real world experience.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Build Financial Literacy While You Work</h3>
            
            <p className="mb-6 text-foreground">
              Getting paid is only part of the story. Learning how to handle your money is just as important. Junior Achievement of Dallas teaches budgeting, credit, investing, and saving through interactive activities like the "Finance Park" simulation. These programs can be a fun way to understand real world finance before you ever apply for a loan or credit card.
            </p>
            
            <p className="mb-6 text-foreground">
              Credit Union of Texas also offers student checking accounts with no minimum balance and no monthly fee. These accounts let you deposit your summer paycheck, start saving for future goals, and learn how to track your spending responsibly.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Earn Certifications That Stand Out</h3>
            
            <p className="mb-6 text-foreground">
              If you are in Dallas ISD, you can apply to take courses through the Career Institutes. These programs allow juniors and seniors to earn certifications in business, marketing, entrepreneurship, and other high demand fields. Graduating with a certification can make you stand out when applying for jobs, scholarships, or college programs.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Why This Matters for Your Financial Future</h3>
            
            <p className="mb-6 text-foreground">
              Starting early gives you a major advantage. When you work, open a bank account, and manage your own income, you build skills that make your future financial life easier. You will understand how to budget, pay bills, and save for emergencies before you even graduate. That kind of experience can lead to better financial choices and less stress in college and adulthood.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Final Thoughts</h3>
            
            <p className="mb-6 text-foreground">
              High school is not just about grades. It can be your first real step toward financial independence. Find an internship, open an account, or sign up for a finance workshop. Every experience adds to your "financial blueprint." The earlier you start, the stronger your future will be.
            </p>
            
            <div className="mt-12 mb-8 mx-auto" style={{ maxWidth: '85%' }}>
              <div className="bg-white rounded-2xl border-2 p-8 hover:shadow-lg transition-all duration-300" style={{ borderColor: '#fed7aa' }}>
                <h4 className="text-2xl font-bold text-center mb-6 font-mono" style={{ color: '#6B5B47' }}>
                  Works Cited
                </h4>
                <ul className="space-y-3 text-left" style={{ color: '#6B5B47', listStyleType: 'disc', paddingLeft: '2rem' }}>
                  <li className="font-mono text-sm leading-relaxed">
                    Dallas Works. "About." Dallas Works, 2025. https://www.dallassummerjobs.org/about
                  </li>
                  <li className="font-mono text-sm leading-relaxed">
                    Dallas Works. "The Summer Internship." Dallas Works, 2025. https://www.dallassummerjobs.org/thesummerinternship
                  </li>
                  <li className="font-mono text-sm leading-relaxed">
                    City of Fort Worth. "NextGen Ambassador Program." City of Fort Worth HR Careers, 2025. https://www.fortworthtexas.gov/departments/hr/careers/next-gen
                  </li>
                  <li className="font-mono text-sm leading-relaxed">
                    Junior Achievement of Dallas. "Education Programs." https://www.jadallas.org/education-programs/
                  </li>
                  <li className="font-mono text-sm leading-relaxed">
                    Credit Union of Texas. "Student Checking." https://www.cutx.org/checking/student
                  </li>
                  <li className="font-mono text-sm leading-relaxed">
                    Dallas Independent School District. "Career Institutes." https://www.dallasisd.org/about-our-schools/career-institutes/home
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "dfw-teen-entrepreneurship":
        return (
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-lg text-emerald-700 mb-6">
              Imagine this. You are a high school student in DFW and you have already started your own small business. Maybe you sell sneakers online, design digital art, or run a tutoring service. You are earning money, managing it responsibly, and learning real business lessons before you even graduate. That's not a dream. The DFW area has real programs that help teens turn ideas into income.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Start Exploring Business Basics</h3>
            
            <p className="mb-6 text-foreground">
              At the Dallas Public Library, the Business and Technology Center offers free workshops on marketing, business planning, and market research. You can use databases to study competitors, attend events on how to register a business, or use 3D printers to prototype your product. This is one of the most affordable ways to turn your ideas into something real.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Use Free Local Mentoring and Classes</h3>
            
            <p className="mb-6 text-foreground">
              If you live in Collin County or nearby, the Collin Small Business Development Center provides free consulting and classes that cover funding, marketing, and business planning. Teens aged 16 and up can attend with a guardian and receive one on one advice from professionals who work with actual entrepreneurs.
            </p>
            
            <p className="mb-6 text-foreground">
              Dallas College also runs small business and entrepreneurship workshops. Some programs let you earn a certificate that you can use to apply for future college credit. These workshops help students learn about pricing, customer outreach, and financial planning.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Pitch Your Idea and Meet Mentors</h3>
            
            <p className="mb-6 text-foreground">
              The DEC Network hosts entrepreneurship events, pitch competitions, and business workshops throughout the year. Many are open to teens and first time founders. You can pitch your business idea, get feedback from mentors, and even win startup funding. These events are an incredible opportunity to build confidence and learn from real investors and entrepreneurs.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Manage Your Money Like a Pro</h3>
            
            <p className="mb-6 text-foreground">
              If your business earns money, keep your finances organized. Open a student checking account, track your income and expenses, and set aside some money for savings or taxes. Learning how to separate your business and personal spending will make you more disciplined and financially aware.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Why This Matters for Your Future</h3>
            
            <p className="mb-6 text-foreground">
              Running a business teaches lessons that go far beyond profit. You learn problem solving, communication, and persistence. Whether or not your business becomes a long term career, the financial skills you gain will stay with you. When you apply for scholarships or internships, you can show real examples of leadership and money management.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Final Thoughts</h3>
            
            <p className="mb-6 text-foreground">
              You do not need to wait until college to take control of your financial future. The DFW area gives you the tools to learn, experiment, and grow. Attend a workshop, start a side hustle, or pitch your big idea. Every dollar you earn and every mistake you make now becomes part of your personal financial education.
            </p>
            
            <div className="mt-12 mb-8 mx-auto" style={{ maxWidth: '85%' }}>
              <div className="bg-white rounded-2xl border-2 p-8 hover:shadow-lg transition-all duration-300" style={{ borderColor: '#fed7aa' }}>
                <h4 className="text-2xl font-bold text-center mb-6 font-mono" style={{ color: '#6B5B47' }}>
                  Works Cited
                </h4>
                <ul className="space-y-3 text-left" style={{ color: '#6B5B47', listStyleType: 'disc', paddingLeft: '2rem' }}>
                  <li className="font-mono text-sm leading-relaxed">
                    Dallas Public Library. "Business & Technology Center." https://www.dallaslibrary.org/central-library
                  </li>
                  <li className="font-mono text-sm leading-relaxed">
                    Collin Small Business Development Center. "Classes & Services." https://collinsbdc.com/
                  </li>
                  <li className="font-mono text-sm leading-relaxed">
                    Dallas College. "Small Business & Entrepreneurship." https://www.dallascollege.edu/study/small-business/
                  </li>
                  <li className="font-mono text-sm leading-relaxed">
                    The DEC Network. "Youth Entrepreneurship Events." https://www.facebook.com/thedecnetwork/
                  </li>
                  <li className="font-mono text-sm leading-relaxed">
                    Credit Union of Texas. "Student Checking." https://www.cutx.org/checking/student
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "dfw-top-trader-competition":
        return (
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-lg text-emerald-700 mb-6">
              Most teens learn about money from TikTok or random YouTube videos. But if you live in the Dallas Fort Worth area, you can learn to invest through a real university-run program, compete for cash prizes, and add a huge asset to your college resume.
            </p>
            
            <p className="mb-6 text-foreground">
              The UT Dallas Top Trader Competition gives high school students a chance to manage a virtual one million dollar stock market portfolio. That might sound intimidating, but that is exactly why it is valuable. You get to make real investing decisions, track markets, and see what happens when you buy stocks, ETFs, or other assets.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Why You Should Join</h3>
            
            <p className="mb-6 text-foreground">
              This competition gives you an introduction to the stock market that most adults wish they had when they were teens. You learn how to research companies, follow market trends, and manage risk. Instead of guessing about investing, you get guided practice.
            </p>
            
            <p className="mb-6 text-foreground">
              There are also cash prizes for top finishers. The first-place winner can earn hundreds of dollars, and finalists get public recognition from a respected business school. That sets you apart when applying to colleges and scholarships.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">How to Prepare</h3>
            
            <p className="mb-6 text-foreground">
              Every skill gets better with practice, and the same is true for investing. Before the competition begins, spend time learning basic terms like shares, dividends, ETFs, and index funds. Pay attention to companies you already know, such as Apple, Nike, or Tesla. Follow how their stock moves during the week.
            </p>
            
            <p className="mb-6 text-foreground">
              Create a simple journal where you write down your market ideas. This helps you think like an investor instead of a follower.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Final Thoughts</h3>
            
            <p className="mb-6 text-foreground">
              Investing is a long-term game. Starting now puts you ahead of almost everyone your age. This competition is your chance to try, make mistakes in a safe environment, and build confidence with money.
            </p>
            
            <div className="mt-12 mb-8 mx-auto" style={{ maxWidth: '85%' }}>
              <div className="bg-white rounded-2xl border-2 p-8 hover:shadow-lg transition-all duration-300" style={{ borderColor: '#fed7aa' }}>
                <h4 className="text-2xl font-bold text-center mb-6 font-mono" style={{ color: '#6B5B47' }}>
                  Works Cited
                </h4>
                <ul className="space-y-3 text-left" style={{ color: '#6B5B47', listStyleType: 'disc', paddingLeft: '2rem' }}>
                  <li className="font-mono text-sm leading-relaxed">
                    University of Texas at Dallas. "Top Trader Stock Market Competition." Jindal School of Management, 2025. https://jindal.utdallas.edu/top-trader-2
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "dfw-international-career-day":
        return (
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-lg text-emerald-700 mb-6">
              You do not need a college degree to start thinking like a global professional. Every year, the World Affairs Council of Dallas Fort Worth brings together hundreds of high school students to learn about real careers in business, diplomacy, finance, technology, and international trade.
            </p>
            
            <p className="mb-6 text-foreground">
              This event is called International Career Day, and it gives you the chance to meet professionals from careers that take place across the world. You learn about jobs you may never have heard of, opportunities that involve travel, and modern careers in global finance and banking.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Why It Matters for Your Future</h3>
            
            <p className="mb-6 text-foreground">
              Most teens do not have access to high level career speakers. This event gives you direct insight from leaders who work in international industries. Not only will you build professional awareness, but you will gain confidence asking questions and talking to adults about your goals.
            </p>
            
            <p className="mb-6 text-foreground">
              This event also gives you networking moments. If you listen well, ask thoughtful questions, and introduce yourself, you can make a strong impression and possibly build your first professional connections.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Tips to Make the Most of It</h3>
            
            <p className="mb-6 text-foreground">
              Bring a notebook. Dress neatly. Think about questions in advance. For example:
            </p>
            
            <ul className="list-disc pl-6 mb-6 text-foreground space-y-2">
              <li>What skills do I need to work in finance or business?</li>
              <li>How did you get your first internship?</li>
              <li>What should a motivated high school student be doing right now?</li>
            </ul>
            
            <p className="mb-6 text-foreground">
              These questions show maturity and preparation. Afterward, record what you learned. This shows growth and gives you material for future essays or interviews.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Final Thought</h3>
            
            <p className="mb-6 text-foreground">
              International Career Day is not just a field trip. It is a preview of life after high school and a reminder that your path can go far beyond your neighborhood.
            </p>
            
            <div className="mt-12 mb-8 mx-auto" style={{ maxWidth: '85%' }}>
              <div className="bg-white rounded-2xl border-2 p-8 hover:shadow-lg transition-all duration-300" style={{ borderColor: '#fed7aa' }}>
                <h4 className="text-2xl font-bold text-center mb-6 font-mono" style={{ color: '#6B5B47' }}>
                  Works Cited
                </h4>
                <ul className="space-y-3 text-left" style={{ color: '#6B5B47', listStyleType: 'disc', paddingLeft: '2rem' }}>
                  <li className="font-mono text-sm leading-relaxed">
                    World Affairs Council of Dallas Fort Worth. "International Career Day." 2025. https://www.dfwworld.org/education/students/international-career-day
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "dallas-isd-financial-literacy":
        return (
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-lg text-emerald-700 mb-6">
              While most high school classes teach history or algebra, Dallas ISD is now prioritizing personal finance and life-skills education for high school students. That means lessons in budgeting, saving, credit, banking, and financial decision-making are becoming part of the student experience.
            </p>
            
            <p className="mb-6 text-foreground">
              This shift prepares you for major life choices like buying a car, opening a bank account, applying for scholarships, or managing college expenses.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Why This Matters</h3>
            
            <p className="mb-6 text-foreground">
              Money decisions start earlier than most teens realize. Having school support and structured lessons now means you can graduate knowing how to avoid common financial mistakes. You will understand credit, how interest works, and why saving early matters.
            </p>
            
            <p className="mb-6 text-foreground">
              Financial confidence is just as important as academic confidence. Dallas ISD's initiative helps make sure you get both.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">How to Take Advantage</h3>
            
            <p className="mb-6 text-foreground">
              Ask your counselor which money-related workshops or elective classes your school offers. If you have room in your schedule, take a finance or economics course. Join any student clubs or after-school programs that offer budgeting, investing, or business challenges.
            </p>
            
            <p className="mb-6 text-foreground">
              Even if you do not pursue a business major, financial literacy is a life skill. Your future self will thank you for learning early.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Final Thought</h3>
            
            <p className="mb-6 text-foreground">
              Money skills are not just for adults. They are for teens who want control, confidence, and options. This Dallas ISD focus gives you a head start.
            </p>
            
            <div className="mt-12 mb-8 mx-auto" style={{ maxWidth: '85%' }}>
              <div className="bg-white rounded-2xl border-2 p-8 hover:shadow-lg transition-all duration-300" style={{ borderColor: '#fed7aa' }}>
                <h4 className="text-2xl font-bold text-center mb-6 font-mono" style={{ color: '#6B5B47' }}>
                  Works Cited
                </h4>
                <ul className="space-y-3 text-left" style={{ color: '#6B5B47', listStyleType: 'disc', paddingLeft: '2rem' }}>
                  <li className="font-mono text-sm leading-relaxed">
                    Dallas ISD Communications. "Dallas ISD prioritizes financial literacy and life skills." The Hub, April 2025. https://thehub.dallasisd.org/2025/04/22/dallas-isd-prioritizes-financial-literacy-and-life-skills
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-lg text-emerald-700 mb-6">
              Local post content coming soon.
            </p>
            <p className="mb-6 text-foreground">
              This local post is currently being developed. Check back soon for valuable insights about community involvement and local financial opportunities.
            </p>
          </div>
        );
    }
  };

  const post = (() => {
    switch(slug) {
      case "local-business-spotlight":
        return {
          title: "Supporting Local Businesses: A Financial Perspective",
          date: "January 15, 2024",
          readTime: "6 min read"
        };
      case "dfw-teens-money-moves":
        return {
          title: "Real Money Moves for DFW Teens: Paid Jobs and Finance Programs You Can Use Now",
          date: "January 15, 2025",
          readTime: "8 min read"
        };
      case "dfw-teen-entrepreneurship":
        return {
          title: "From Classrooms to Cash Flow: Entrepreneurship Opportunities for Texas Teens in DFW",
          date: "January 16, 2025",
          readTime: "7 min read"
        };
      case "dfw-top-trader-competition":
        return {
          title: "DFW High School Investing Opportunity: Compete Like a Future Wall Street Pro",
          date: "January 17, 2025",
          readTime: "5 min read"
        };
      case "dfw-international-career-day":
        return {
          title: "Get Ahead: DFW International Career Day for High School Students",
          date: "January 18, 2025",
          readTime: "5 min read"
        };
      case "dallas-isd-financial-literacy":
        return {
          title: "Financial Skills for Life: Dallas ISD's Student Money Education Push",
          date: "January 19, 2025",
          readTime: "5 min read"
        };
      default:
        return {
          title: "Local Post",
          date: "Coming Soon",
          readTime: ""
        };
    }
  })();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
            {post.title}
          </h1>
          
          <div className="flex justify-center items-center space-x-4 mb-8 text-muted-foreground">
            <span>{post.date}</span>
            {post.readTime && <span>•</span>}
            {post.readTime && <span>{post.readTime}</span>}
          </div>
          
          {renderContent()}
        </div>
      </article>
      
      <Footer />
    </div>
  );
}
