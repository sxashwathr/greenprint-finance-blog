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
              If you live in the Dallas Fort Worth area, you don't have to wait until after high school to start earning money, gaining real work experience, and building the kind of financial foundation that many adults wish they had started earlier.
            </p>
            
            <p className="mb-6 text-foreground">
              There are local programs designed just for teens like you. These opportunities pay you, teach professional skills, and help you build a strong start toward financial independence.
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
            
            <h4 className="text-lg font-medium mb-3 text-white">Works Cited</h4>
            
            <div className="mb-6 text-foreground text-sm">
              <p className="mb-2">Dallas Works. "About." Dallas Works, 2025. https://www.dallassummerjobs.org/about</p>
              <p className="mb-2">Dallas Works. "The Summer Internship." Dallas Works, 2025. https://www.dallassummerjobs.org/thesummerinternship</p>
              <p className="mb-2">City of Fort Worth. "NextGen Ambassador Program." City of Fort Worth HR Careers, 2025. https://www.fortworthtexas.gov/departments/hr/careers/next-gen</p>
              <p className="mb-2">Junior Achievement of Dallas. "Education Programs." https://www.jadallas.org/education-programs/</p>
              <p className="mb-2">Credit Union of Texas. "Student Checking." https://www.cutx.org/checking/student</p>
              <p className="mb-2">Dallas Independent School District. "Career Institutes." https://www.dallasisd.org/about-our-schools/career-institutes/home</p>
            </div>
          </div>
        );

      case "dfw-teen-entrepreneurship":
        return (
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-lg text-emerald-700 mb-6">
              Imagine this. You are a high school student in DFW and you have already started your own small business. Maybe you sell sneakers online, design digital art, or run a tutoring service. You are earning money, managing it responsibly, and learning real business lessons before you even graduate.
            </p>
            
            <p className="mb-6 text-foreground">
              That's not a dream. The DFW area has real programs that help teens turn ideas into income.
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
            
            <h4 className="text-lg font-medium mb-3 text-white">Works Cited</h4>
            
            <div className="mb-6 text-foreground text-sm">
              <p className="mb-2">Dallas Public Library. "Business & Technology Center." https://www.dallaslibrary.org/central-library</p>
              <p className="mb-2">Collin Small Business Development Center. "Classes & Services." https://collinsbdc.com/</p>
              <p className="mb-2">Dallas College. "Small Business & Entrepreneurship." https://www.dallascollege.edu/study/small-business/</p>
              <p className="mb-2">The DEC Network. "Youth Entrepreneurship Events." https://www.facebook.com/thedecnetwork/</p>
              <p className="mb-2">Credit Union of Texas. "Student Checking." https://www.cutx.org/checking/student</p>
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
