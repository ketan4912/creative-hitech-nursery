import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Leaf, 
  Sun, 
  Droplets, 
  Search, 
  CheckCircle2, 
  Star, 
  Send, 
  ArrowRight, 
  
  ChevronRight, 
  Truck, 
  Award, 
  Menu, 
  X, 
  Globe, 
  ExternalLink,
  MessageSquare,
  Building2,
  TrendingUp,
  ShoppingBag,
  SunMedium
} from 'lucide-react';

interface Plant {
  id: number;
  name: string;
  nameMr: string;
  category: 'indoor' | 'outdoor' | 'flowering' | 'exotic';
  price: string;
  wholesalePrice: string;
  minOrder: string;
  sunlight: string;
  sunlightMr: string;
  water: string;
  waterMr: string;
  image: string;
  badge?: string;
  badgeMr?: string;
  rating: number;
}

interface Review {
  id: number;
  name: string;
  nameMr: string;
  role: string;
  roleMr: string;
  comment: string;
  commentMr: string;
  rating: number;
  date: string;
  dateMr: string;
}

const PLANT_CATALOG: Plant[] = [
  {
    id: 1,
    name: 'Areca Palm Premium',
    nameMr: 'अरेका पाम प्रीमियम',
    category: 'indoor',
    price: '₹250',
    wholesalePrice: '₹120 / piece',
    minOrder: '20 units',
    sunlight: 'Partial Sun',
    sunlightMr: 'अर्धा सूर्यप्रकाश',
    water: 'Medium',
    waterMr: 'मध्यम',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=600',
    badge: 'Bestseller',
    badgeMr: 'सर्वात जास्त विकले जाणारे',
    rating: 4.9
  },
  {
    id: 2,
    name: 'Monstera Deliciosa',
    nameMr: 'मॉन्स्टेरा डेलिसीओसा',
    category: 'indoor',
    price: '₹450',
    wholesalePrice: '₹220 / piece',
    minOrder: '15 units',
    sunlight: 'Bright Indirect',
    sunlightMr: 'प्रकाशाची अप्रत्यक्ष किरणे',
    water: 'Low-Medium',
    waterMr: 'कमी ते मध्यम',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=600',
    badge: 'Trending',
    badgeMr: 'ट्रेंडिंग',
    rating: 4.8
  },
  {
    id: 3,
    name: 'Golden Pothos (Money Plant)',
    nameMr: 'गोल्डन पोथोस (मनी प्लांट)',
    category: 'indoor',
    price: '₹120',
    wholesalePrice: '₹55 / piece',
    minOrder: '50 units',
    sunlight: 'Low to Bright',
    sunlightMr: 'कमी ते तेजस्वी प्रकाश',
    water: 'Low',
    waterMr: 'कमी',
    image: 'https://images.unsplash.com/photo-1620127807580-92850901e149?auto=format&fit=crop&q=80&w=600',
    rating: 5.0
  },
  {
    id: 4,
    name: 'Ficus Benjamina (Weeping Fig)',
    nameMr: 'फिकस बेंजामिना (वीपिंग फिग)',
    category: 'outdoor',
    price: '₹380',
    wholesalePrice: '₹180 / piece',
    minOrder: '25 units',
    sunlight: 'Full / Partial Sun',
    sunlightMr: 'पूर्ण / अर्धा सूर्यप्रकाश',
    water: 'Regular',
    waterMr: 'नियमित',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=600',
    rating: 4.7
  },
  {
    id: 5,
    name: 'Bougainvillea Grafted Hybrid',
    nameMr: 'बोगनवेलिया ग्राफ्टेड हायब्रिड',
    category: 'flowering',
    price: '₹180',
    wholesalePrice: '₹85 / piece',
    minOrder: '30 units',
    sunlight: 'Full Sun',
    sunlightMr: 'पूर्ण सूर्यप्रकाश',
    water: 'Low',
    waterMr: 'कमी',
    image: 'https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&q=80&w=600',
    badge: 'High Demand',
    badgeMr: 'मोठी मागणी',
    rating: 4.9
  },
  {
    id: 6,
    name: 'Exotic Snake Plant (Sansevieria)',
    nameMr: 'एक्झोटिक स्नेक प्लांट (सानसेविएरिया)',
    category: 'exotic',
    price: '₹300',
    wholesalePrice: '₹140 / piece',
    minOrder: '20 units',
    sunlight: 'Low Light Tolerant',
    sunlightMr: 'कमी प्रकाशातही जगणारे',
    water: 'Very Low',
    waterMr: 'खूप कमी',
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?auto=format&fit=crop&q=80&w=600',
    rating: 4.8
  }
];

const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Rajesh Patil',
    nameMr: 'राजेश पाटील',
    role: 'Landscape Architect, Pune',
    roleMr: 'लँडस्केप आर्किटेक्ट, पुणे',
    comment: 'Creative Hitech Nursery provided exceptional quality Areca palms for our resort project in Lonavala. Outstanding wholesale prices and prompt delivery!',
    commentMr: 'क्रिएटिव्ह हायटेक नर्सरीने लोणावळ्यातील आमच्या रिसॉर्ट प्रकल्पासाठी अत्यंत उत्कृष्ट दर्जाचे अरेका पाम पुरवले. होलसेल दर आणि जलद डिलिव्हरी उत्कृष्ट आहे!',
    rating: 5,
    date: '2 days ago',
    dateMr: '२ दिवसांपूर्वी'
  },
  {
    id: 2,
    name: 'Ananya Sharma',
    nameMr: 'अनन्या शर्मा',
    role: 'Interior Designer',
    roleMr: 'इंटीरियर डिझायनर',
    comment: 'The healthiest indoor foliage plants in Uruli Kanchan area. Open 24 hours service made night pick-up so effortless for our emergency setup.',
    commentMr: 'उरळी कांचन परिसरातील सर्वात निरोगी इनडोअर रोपे. चोवीस तास सुरू असणाऱ्या सेवेमुळे आमच्या आपत्कालीन सेटअपसाठी रात्रीच्या वेळी रोपे उचलणे अत्यंत सोपे झाले.',
    rating: 5,
    date: '1 week ago',
    dateMr: '१ आठवड्यापूर्वी'
  },
  {
    id: 3,
    name: 'Suresh Deshmukh',
    nameMr: 'सुरेश देशमुख',
    role: 'Commercial Nursery Buyer',
    roleMr: 'व्यावसायिक नर्सरी खरेदीदार',
    comment: 'Bulk ordering was seamless. The staff near BAIF Research Center helped load over 1,000 saplings with extreme care. Highly recommended wholesale nursery!',
    commentMr: 'मोठ्या प्रमाणात ऑर्डर देणे अत्यंत सोपे होते. बीएआयएफ रिसर्च सेंटर जवळील कर्मचाऱ्यांनी १,००० हून अधिक रोपे अत्यंत काळजीपूर्वक लोड करण्यास मदत केली. अत्यंत शिफारस केलेली होलसेल नर्सरी!',
    rating: 5,
    date: '3 weeks ago',
    dateMr: '३ आठवड्यापूर्वी'
  }
];

export default function App() {
  const [lang, setLang] = useState<'en' | 'mr'>('en');
  const [activeTab, setActiveTab] = useState<'overview' | 'catalog' | 'wholesale'>('overview');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  // Quote Calculator State
  const [quoteQuantity, setQuoteQuantity] = useState<number>(50);
  const [quotePlantType, setQuotePlantType] = useState<string>('indoor');
  
  // Feedback form state
  const [feedbackName, setFeedbackName] = useState<string>('');
  const [feedbackComment, setFeedbackComment] = useState<string>('');
  const [feedbackSuccess, setFeedbackSuccess] = useState<boolean>(false);

  const filteredPlants = PLANT_CATALOG.filter(plant => {
    const matchesCategory = categoryFilter === 'all' || plant.category === categoryFilter;
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase()) || plant.nameMr.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedbackName && feedbackComment) {
      setFeedbackSuccess(true);
      setTimeout(() => {
        setFeedbackName('');
        setFeedbackComment('');
        setFeedbackSuccess(false);
      }, 4000);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-purple-500 selection:text-white relative overflow-x-hidden pt-20">
      
      {}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"
        ></div>
        <div className="absolute -top-24 left-1/4 w-[35rem] h-[35rem] bg-indigo-200/40 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/3 right-10 w-[30rem] h-[30rem] bg-purple-200/50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 left-1/3 w-[32rem] h-[32rem] bg-emerald-100/60 rounded-full blur-[120px]"></div>
      </div>

      {}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-purple-100/80 transition-all duration-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-emerald-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 text-white">
                <Leaf className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-slate-900 tracking-tight block">
                  creative hitech <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">nursery</span>
                </span>
                <span className="text-[10px] text-purple-600 font-bold tracking-widest uppercase block -mt-1">
                  {lang === 'en' ? 'Wholesale & Retail • Uruli Kanchan' : 'होलसेल आणि किरकोळ • उरळी कांचन'}
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
              <a href="#hero" className="hover:text-indigo-600 transition-colors">{lang === 'en' ? 'Home' : 'मुख्यपृष्ठ'}</a>
              <a href="#catalog" className="hover:text-indigo-600 transition-colors">{lang === 'en' ? 'Products' : 'उत्पादने'}</a>
              <a href="#wholesale" className="hover:text-indigo-600 transition-colors">{lang === 'en' ? 'Wholesale' : 'होलसेल'}</a>
              <a href="#location" className="hover:text-indigo-600 transition-colors">{lang === 'en' ? 'Location' : 'पत्ता'}</a>
              <a href="#reviews" className="hover:text-indigo-600 transition-colors">{lang === 'en' ? 'Reviews' : 'अभिप्राय'}</a>
            </nav>

            {/* Header Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={() => setLang(lang === 'en' ? 'mr' : 'en')}
                className="flex items-center space-x-1.5 px-3 py-1.5 bg-purple-50/80 border border-purple-100 rounded-full text-xs font-bold text-purple-700 hover:bg-purple-100 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-purple-600" />
                <span>{lang === 'en' ? 'मराठी' : 'English'}</span>
              </button>
              
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer">
                <SunMedium className="w-4 h-4" />
              </div>

              <a 
                href="tel:7378748124"
                className="group relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700 rounded-full shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{lang === 'en' ? 'Call 73787 48124' : 'कॉल करा ७३७८७ ४८१२४'}</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={() => setLang(lang === 'en' ? 'mr' : 'en')}
                className="px-2.5 py-1.5 bg-purple-50 border border-purple-100 rounded-lg text-xs font-bold text-purple-700"
              >
                {lang === 'en' ? 'मराठी' : 'ENG'}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-purple-100 bg-white/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3">
            <a 
              href="#hero" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-purple-50 hover:text-purple-700"
            >
              {lang === 'en' ? 'Home' : 'मुख्यपृष्ठ'}
            </a>
            <a 
              href="#catalog" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-purple-50 hover:text-purple-700"
            >
              {lang === 'en' ? 'Plant Catalog' : 'वनस्पती कॅटलॉग'}
            </a>
            <a 
              href="#wholesale" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-purple-50 hover:text-purple-700"
            >
              {lang === 'en' ? 'Wholesale Services' : 'होलसेल सेवा'}
            </a>
            <a 
              href="#location" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-purple-50 hover:text-purple-700"
            >
              {lang === 'en' ? 'Location & Hours' : 'पत्ता आणि वेळ'}
            </a>
            <a 
              href="tel:7378748124" 
              className="flex items-center justify-center w-full py-3 px-4 rounded-full text-center font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md mt-4"
            >
              <Phone className="w-4 h-4 mr-2" />
              {lang === 'en' ? 'Call 73787 48124' : 'कॉल करा ७३७८७ ४८१२४'}
            </a>
          </div>
        )}
      </header>

      {}
      <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Purple Badge Pill Matching Reference */}
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-purple-700 text-xs font-bold shadow-sm">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-600 text-white text-[10px] font-black">
                  300+
                </span>
                <span>{lang === 'en' ? 'Trusted by top institutions & growers across Maharashtra' : 'महाराष्ट्रातील नामांकित संस्था आणि उत्पादकांचा विश्वास'}</span>
              </div>

              {/* Main Headline with Highlighted Underline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                {lang === 'en' ? 'Grow your entire nursery inventory on ' : 'तुमची संपूर्ण नर्सरी इन्व्हेंटरी एकाच व्यासपीठावर '}
                <span className="relative inline-block text-indigo-600">
                  {lang === 'en' ? 'one platform' : 'वाढवा'}
                  <span className="absolute bottom-1 left-0 w-full h-2.5 bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 rounded-full opacity-60 -z-10"></span>
                </span>
                {lang === 'en' ? '' : '.'}
              </h1>

              {/* Description */}
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                {lang === 'en' 
                  ? 'Creative Hitech Nursery brings indoor foliage, outdoor landscaping trees, flowering shrubs, and exotic plants straight into a unified supply chain — so your projects stop dealing with low quality stock and start growing.' 
                  : 'क्रिएटिव्ह हायटेक नर्सरी इनडोअर रोपे, आऊटडोअर लँडस्केपिंग झाडे, फुलांचे झुडूप आणि एक्झोटिक वनस्पती एकात्मिक पुरवठा साखळीत आणते — जेणेकरून तुमच्या प्रकल्पांना सर्वोत्तम दर्जाचे बियाणे व रोपे मिळतील.'}
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm font-semibold text-slate-700">
                <div className="flex items-center space-x-2.5">
                  <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{lang === 'en' ? 'All Type Indoor & Outdoor Varieties' : 'सर्व प्रकारच्या इनडोअर व आऊटडोअर जाती'}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{lang === 'en' ? 'Direct Farm Wholesale Rates' : 'थेट शेतावरून होलसेल दर'}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{lang === 'en' ? 'Open 24 Hours • Uruli Kanchan' : '२४ तास सुरू • उरळी कांचन'}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{lang === 'en' ? 'Fast Express Loading & Transport' : 'जलद लोडिंग आणि वाहतूक सोय'}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                <a
                  href="#catalog"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700 text-white font-bold hover:shadow-xl hover:shadow-purple-500/30 transition-all text-center flex items-center justify-center group"
                >
                  {lang === 'en' ? 'Explore Plant Products' : 'वनस्पती उत्पादने पहा'}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#wholesale"
                  className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all text-center flex items-center justify-center shadow-sm"
                >
                  {lang === 'en' ? 'Request Wholesale Quote' : 'होलसेल कोटेशन मागवा'}
                </a>
              </div>

            </div>

            {}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white/90 border border-purple-100 p-6 shadow-2xl shadow-purple-950/10 backdrop-blur-xl">
                
                {/* Traffic Light Browser Window Dots */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-xs font-extrabold text-slate-800 tracking-tight">
                      {lang === 'en' ? 'Creative Hitech Wholesale Portal' : 'क्रिएटिव्ह हायटेक होलसेल पोर्टल'}
                    </span>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {lang === 'en' ? '● Stock Live' : '● स्टॉक उपलब्ध'}
                  </span>
                </div>

                {/* Dashboard Pill Navigation */}
                <div className="flex space-x-1 p-1 bg-slate-100/80 rounded-2xl my-4 border border-slate-200/60">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition-all ${
                      activeTab === 'overview'
                        ? 'bg-white text-indigo-600 shadow-sm'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {lang === 'en' ? 'Metrics' : 'माहिती'}
                  </button>
                  <button
                    onClick={() => setActiveTab('catalog')}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition-all ${
                      activeTab === 'catalog'
                        ? 'bg-white text-indigo-600 shadow-sm'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {lang === 'en' ? 'Quick Order' : 'जलद ऑर्डर'}
                  </button>
                  <button
                    onClick={() => setActiveTab('wholesale')}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition-all ${
                      activeTab === 'wholesale'
                        ? 'bg-white text-indigo-600 shadow-sm'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {lang === 'en' ? 'Nursery Info' : 'नर्सरी तपशील'}
                  </button>
                </div>

                {/* Tab 1: Overview Dashboard Stats */}
                {activeTab === 'overview' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100">
                        <span className="text-[10px] font-black uppercase tracking-wider text-purple-600">
                          {lang === 'en' ? 'INDOOR PLANTS' : 'इनडोअर रोपे'}
                        </span>
                        <div className="flex items-baseline space-x-2 mt-1">
                          <p className="text-2xl font-black text-slate-900">96.4%</p>
                          <span className="text-xs font-bold text-emerald-600">+1.2</span>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-0.5">
                          {lang === 'en' ? 'Availability Score' : 'उपलब्धता प्रमाण'}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100">
                        <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600">
                          {lang === 'en' ? 'WHOLESALE DISCOUNT' : 'होलसेल सूट'}
                        </span>
                        <div className="flex items-baseline space-x-2 mt-1">
                          <p className="text-2xl font-black text-slate-900">45%</p>
                          <span className="text-xs font-bold text-indigo-600">
                            {lang === 'en' ? 'Direct' : 'थेट'}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-0.5">
                          {lang === 'en' ? 'Farm Direct Savings' : 'शेत थेट बचत'}
                        </p>
                      </div>
                    </div>

                    {/* Bar chart mockup matching screenshot style */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-700">
                          {lang === 'en' ? 'Stock Availability Trend' : 'स्टॉक उपलब्धता कल'}
                        </span>
                        <span className="text-[11px] text-slate-400 font-semibold">
                          {lang === 'en' ? '12 mo' : '१२ महिने'}
                        </span>
                      </div>

                      <div className="flex items-end justify-between h-20 pt-2 px-1">
                        {[40, 55, 35, 70, 60, 80, 65, 90, 75, 85, 95, 100].map((h, i) => (
                          <div key={i} className="w-3 bg-purple-200 rounded-t-md hover:bg-purple-600 transition-colors" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-between shadow-lg shadow-purple-500/20">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-white">
                          <ShoppingBag className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold">
                            {lang === 'en' ? 'Instant Bulk Order' : 'त्वरित मोठ्या प्रमाणात ऑर्डर'}
                          </p>
                          <p className="text-[10px] text-purple-100">
                            {lang === 'en' ? 'Same-day dispatch Pune district' : 'पुणे जिल्ह्यात त्याच दिवशी पाठवणे'}
                          </p>
                        </div>
                      </div>
                      <a
                        href="tel:7378748124"
                        className="px-3 py-1.5 rounded-full bg-white text-purple-900 font-extrabold text-xs hover:bg-purple-50 transition-colors"
                      >
                        {lang === 'en' ? 'Call' : 'कॉल'}
                      </a>
                    </div>
                  </div>
                )}

                {/* Tab 2: Quick Order */}
                {activeTab === 'catalog' && (
                  <div className="space-y-3">
                    <p className="text-xs font-medium text-slate-500">
                      {lang === 'en' ? 'Select plant type for price calculator:' : 'किंमत मोजण्यासाठी वनस्पतीचा प्रकार निवडा:'}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { key: 'indoor foliage', labelEn: 'Indoor Foliage', labelMr: 'इनडोअर रोपे' },
                        { key: 'outdoor shrubs', labelEn: 'Outdoor Shrubs', labelMr: 'आऊटडोअर झुडूप' },
                        { key: 'flowering plants', labelEn: 'Flowering Plants', labelMr: 'फुलांची रोपे' },
                        { key: 'exotic trees', labelEn: 'Exotic Trees', labelMr: 'एक्झोटिक झाडे' }
                      ].map((cat, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setQuotePlantType(cat.key)}
                          className={`p-2.5 rounded-xl text-xs text-left font-bold border transition-all ${
                            quotePlantType === cat.key 
                              ? 'bg-purple-50 border-purple-300 text-purple-700 shadow-sm' 
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          {lang === 'en' ? cat.labelEn : cat.labelMr}
                        </button>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-600 font-medium">
                          {lang === 'en' ? 'Quantity:' : 'प्रमाण:'}
                        </span>
                        <span className="text-purple-700 font-extrabold">
                          {quoteQuantity} {lang === 'en' ? 'Units' : 'नग'}
                        </span>
                      </div>
                      <input 
                        type="range" 
                        min="10" 
                        max="500" 
                        step="10"
                        value={quoteQuantity} 
                        onChange={(e) => setQuoteQuantity(Number(e.target.value))}
                        className="w-full accent-purple-600 bg-slate-200 rounded-lg cursor-pointer h-2"
                      />
                    </div>

                    <a 
                      href={`https://wa.me/917378748124?text=Hello%20Creative%20Hitech%20Nursery,%20I%20am%20interested%20in%20ordering%20${quoteQuantity}%20units%20of%20${quotePlantType}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs flex items-center justify-center transition-opacity hover:opacity-95 shadow-md"
                    >
                      {lang === 'en' ? `Inquire for ${quoteQuantity} Units` : `${quoteQuantity} नग साठी चौकशी करा`}
                    </a>
                  </div>
                )}

                {/* Tab 3: Contact Info */}
                {activeTab === 'wholesale' && (
                  <div className="space-y-3 text-xs">
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-slate-800">
                          {lang === 'en' ? 'Creative Hitech Nursery Address' : 'क्रिएटिव्ह हायटेक नर्सरी पत्ता'}
                        </p>
                        <p className="text-slate-500 text-[11px] mt-0.5">
                          {lang === 'en' ? 'BAIF Rd, opp. BAIF Research Center, Uruli Kanchan, Maharashtra 412202' : 'बीएआयएफ रोड, बीएआयएफ रिसर्च सेंटर समोर, उरळी कांचन, महाराष्ट्र ४१२२०२'}
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-purple-600 shrink-0" />
                      <div>
                        <p className="font-bold text-slate-800">
                          {lang === 'en' ? 'Phone' : 'मोबाईल नंबर'}
                        </p>
                        <p className="text-purple-700 font-bold font-mono mt-0.5">73787 48124</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-purple-600 shrink-0" />
                      <div>
                        <p className="font-bold text-slate-800">
                          {lang === 'en' ? 'Working Hours' : 'काम करण्याची वेळ'}
                        </p>
                        <p className="text-slate-500 text-[11px]">
                          {lang === 'en' ? 'Open 24 Hours • Mon to Sun' : '२४ तास सुरू • सोमवार ते रविवार'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {}
      <section className="py-10 bg-white/70 border-y border-purple-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-purple-200 transition-all">
              <div className="p-3 rounded-2xl bg-purple-100 text-purple-700 shrink-0">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  {lang === 'en' ? 'Direct Nursery Stock' : 'थेट नर्सरी स्टॉक'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {lang === 'en' ? 'Healthy indoor & outdoor foliage cultivated direct in farm beds.' : 'शेत जमिनीत थेट जोपासलेली निरोगी इनडोअर व आऊटडोअर रोपे.'}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-purple-200 transition-all">
              <div className="p-3 rounded-2xl bg-indigo-100 text-indigo-700 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  {lang === 'en' ? 'Wholesale Pricing' : 'होलसेल दर'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {lang === 'en' ? 'Tiered discounts for developers and landscape contractors.' : 'डेव्हलपर्स आणि लँडस्केप कंत्राटदारांसाठी विशेष सूट.'}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-purple-200 transition-all">
              <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-700 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  {lang === 'en' ? 'Open 24 Hours' : 'चोवीस तास सुरू'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {lang === 'en' ? 'Round-the-clock availability for emergency plant orders.' : 'आपत्कालीन वनस्पती ऑर्डर्ससाठी २४ तास उपलब्धता.'}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-purple-200 transition-all">
              <div className="p-3 rounded-2xl bg-purple-100 text-purple-700 shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  {lang === 'en' ? 'Careful Transport' : 'काळजीपूर्वक वाहतूक'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {lang === 'en' ? 'Professional loading and delivery across Maharashtra.' : 'संपूर्ण महाराष्ट्रात व्यावसायिक लोडिंग आणि डिलिव्हरी.'}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {}
      <section id="catalog" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-purple-700 uppercase tracking-widest bg-purple-100 border border-purple-200 px-3.5 py-1.5 rounded-full">
              {lang === 'en' ? 'Product Catalog' : 'उत्पादने कॅटलॉग'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              {lang === 'en' ? 'Explore Premium Plants Direct From Nursery' : 'नर्सरीमधून थेट प्रीमियम वनस्पती शोधा'}
            </h2>
            <p className="text-slate-600 text-sm mt-3 font-normal">
              {lang === 'en' ? 'Browse our live stock of indoor foliage, outdoor landscaping plants, and exotic varieties.' : 'आमच्या इनडोअर रोपे, आऊटडोअर लँडस्केपिंग वनस्पती आणि एक्झोटिक जातींच्या थेट स्टॉकची पाहणी करा.'}
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-sm">
            
            <div className="flex items-center space-x-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {[
                { id: 'all', labelEn: 'All Plants', labelMr: 'सर्व वनस्पती' },
                { id: 'indoor', labelEn: 'Indoor Foliage', labelMr: 'इनडोअर रोपे' },
                { id: 'outdoor', labelEn: 'Outdoor Landscape', labelMr: 'आऊटडोअर लँडस्केप' },
                { id: 'flowering', labelEn: 'Flowering & Shrubs', labelMr: 'फुले व झुडूप' },
                { id: 'exotic', labelEn: 'Exotic Varieties', labelMr: 'एक्झोटिक जाती' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategoryFilter(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    categoryFilter === cat.id
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {lang === 'en' ? cat.labelEn : cat.labelMr}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder={lang === 'en' ? 'Search plants...' : 'वनस्पती शोधा...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-800 focus:outline-none focus:border-purple-600 transition-colors"
              />
            </div>

          </div>

          {/* Catalog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlants.map(plant => (
              <div 
                key={plant.id}
                className="group rounded-3xl bg-white border border-slate-200/80 overflow-hidden hover:border-purple-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/5 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={plant.image} 
                      alt={plant.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {plant.badge && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold bg-purple-600 text-white uppercase tracking-wider shadow-md">
                        {lang === 'en' ? plant.badge : (plant.badgeMr || plant.badge)}
                      </span>
                    )}

                    <div className="absolute top-3 right-3 flex items-center space-x-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[11px] text-amber-500 font-bold">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>{plant.rating}</span>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                        {lang === 'en' ? plant.name : plant.nameMr}
                      </h3>
                      <p className="text-xs text-slate-500 capitalize mt-0.5">
                        {lang === 'en' ? `${plant.category} Species` : `${plant.category === 'indoor' ? 'इनडोअर' : plant.category === 'outdoor' ? 'आऊटडोअर' : plant.category === 'flowering' ? 'फुलांची' : 'एक्झोटिक'} प्रजाती`}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div className="flex items-center space-x-1.5">
                        <Sun className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span className="truncate">{lang === 'en' ? plant.sunlight : plant.sunlightMr}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Droplets className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span className="truncate">{lang === 'en' ? plant.water : plant.waterMr}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-baseline justify-between border-t border-slate-100">
                      <div>
                        <span className="text-[10px] text-slate-400 font-semibold block">
                          {lang === 'en' ? 'RETAIL' : 'किरकोळ'}
                        </span>
                        <span className="text-base font-bold text-slate-900">{plant.price}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-purple-600 font-bold block uppercase tracking-wider">
                          {lang === 'en' ? 'WHOLESALE' : 'होलसेल'}
                        </span>
                        <span className="text-sm font-black text-purple-700">{plant.wholesalePrice}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => setSelectedPlant(plant)}
                    className="w-full py-2.5 rounded-xl bg-purple-50 hover:bg-purple-600 hover:text-white text-purple-700 text-xs font-bold transition-all flex items-center justify-center space-x-1 border border-purple-100"
                  >
                    <span>{lang === 'en' ? 'View Wholesale Pricing' : 'होलसेल दर पहा'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {}
      {selectedPlant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white border border-purple-100 rounded-3xl p-6 shadow-2xl space-y-5">
            <button
              onClick={() => setSelectedPlant(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-4">
              <img src={selectedPlant.image} alt={selectedPlant.name} className="w-20 h-20 rounded-2xl object-cover" />
              <div>
                <span className="text-[10px] uppercase font-bold text-purple-600 tracking-wider">
                  {lang === 'en' ? 'Plant Details' : 'वनस्पती तपशील'}
                </span>
                <h3 className="text-xl font-bold text-slate-900">{lang === 'en' ? selectedPlant.name : selectedPlant.nameMr}</h3>
                <p className="text-xs text-slate-500">
                  {lang === 'en' ? `Min Order: ${selectedPlant.minOrder}` : `किमान ऑर्डर: ${selectedPlant.minOrder}`}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">{lang === 'en' ? 'Retail Rate:' : 'किरकोळ दर:'}</span>
                <span className="text-slate-900 font-bold">{selectedPlant.price}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">{lang === 'en' ? 'Wholesale Direct Rate:' : 'थेट होलसेल दर:'}</span>
                <span className="text-purple-700 font-extrabold">{selectedPlant.wholesalePrice}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">{lang === 'en' ? 'Sunlight:' : 'सूर्यप्रकाश:'}</span>
                <span className="text-slate-800 font-medium">{lang === 'en' ? selectedPlant.sunlight : selectedPlant.sunlightMr}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">{lang === 'en' ? 'Watering:' : 'पाणी देणे:'}</span>
                <span className="text-slate-800 font-medium">{lang === 'en' ? selectedPlant.water : selectedPlant.waterMr}</span>
              </div>
            </div>

            <div className="flex space-x-3">
              <a
                href={`https://wa.me/917378748124?text=Hi,%20I%20want%20to%20order%20${encodeURIComponent(selectedPlant.name)}%20in%20wholesale.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs text-center transition-opacity hover:opacity-95 shadow-md"
              >
                {lang === 'en' ? 'Inquire via WhatsApp' : 'व्हॉट्सॲपवर चौकशी करा'}
              </a>
              <a
                href="tel:7378748124"
                className="px-5 py-3 rounded-full bg-slate-100 text-slate-700 font-bold text-xs text-center hover:bg-slate-200 transition-colors"
              >
                {lang === 'en' ? 'Call' : 'कॉल करा'}
              </a>
            </div>
          </div>
        </div>
      )}

      {}
      <section id="wholesale" className="py-20 bg-purple-50/40 border-y border-purple-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-purple-700 uppercase tracking-widest bg-purple-100 border border-purple-200 px-3.5 py-1.5 rounded-full">
                {lang === 'en' ? 'B2B Bulk Nursery Supplies' : 'व्यावसायिक बल्क नर्सरी पुरवठा'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                {lang === 'en' ? 'Bulk Plant Nursery Supplies For Commercial Projects' : 'व्यावसायिक प्रकल्पांसाठी मोठ्या प्रमाणावर वनस्पती पुरवठा'}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                {lang === 'en' 
                  ? 'Creative Hitech Nursery provides healthiest root-bound stock directly from field beds for landscape architects, builders, and developers across Maharashtra.' 
                  : 'क्रिएटिव्ह हायटेक नर्सरी महाराष्ट्रातील लँडस्केप आर्किटेक्ट, बिल्डर्स आणि डेव्हलपर्ससाठी थेट शेतातून अत्यंत निरोगी रोपे पुरवते.'}
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-2xl bg-purple-100 text-purple-700 shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {lang === 'en' ? 'Architect & Builder Rates' : 'आर्किटेक्ट आणि बिल्डर दर'}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {lang === 'en' ? 'Custom quotation lists tailored to project estimate sheets.' : 'प्रकल्प अंदाजपत्रकानुसार विशेष कोटेशन सूची.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-2xl bg-indigo-100 text-indigo-700 shrink-0 mt-0.5">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {lang === 'en' ? 'Consistent High-Volume Stock' : 'मोठ्या प्रमाणावर सातत्यपूर्ण स्टॉक'}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {lang === 'en' ? 'Over 50,000+ plants ready in farm beds.' : 'शेतजमिनीत ५०,०००+ पेक्षा जास्त रोपे तयार आहेत.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-purple-100 flex items-center space-x-4 shadow-sm">
                <div className="p-3 rounded-2xl bg-purple-100 text-purple-700">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold">
                    {lang === 'en' ? 'Direct Call Desk' : 'थेट संपर्क क्रमांक'}
                  </p>
                  <a href="tel:7378748124" className="text-lg font-black text-slate-900 hover:text-purple-600 transition-colors">
                    73787 48124
                  </a>
                </div>
              </div>
            </div>

            {/* Form Container */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-purple-100 shadow-xl shadow-purple-900/5 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {lang === 'en' ? 'Request Bulk Quote' : 'होलसेल कोटेशन मागवा'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {lang === 'en' ? 'Get an instant callback with pricing for your project.' : 'तुमच्या प्रकल्पाच्या किंमतीसह त्वरित कॉल बॅक मिळवा.'}
                  </p>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {lang === 'en' ? 'Name / Firm' : 'नाव / फर्म'}
                    </label>
                    <input 
                      type="text" 
                      placeholder={lang === 'en' ? 'e.g. Pune Green Landscapes' : 'उदा. पुणे ग्रीन लँडस्केप्स'} 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-purple-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'en' ? 'Phone Number' : 'मोबाईल नंबर'}
                      </label>
                      <input 
                        type="tel" 
                        placeholder="0987654321" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-purple-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'en' ? 'Plant Requirement' : 'वनस्पती आवश्यकता'}
                      </label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-purple-600">
                        {lang === 'en' ? (
                          <>
                            <option>Indoor Foliage (Areca, Monstera)</option>
                            <option>Outdoor Hedge Plants</option>
                            <option>Flowering Bougainvillea</option>
                            <option>Exotic Ornamental Palms</option>
                          </>
                        ) : (
                          <>
                            <option>इनडोअर रोपे (अरेका, मॉन्स्टेरा)</option>
                            <option>आऊटडोअर हेज प्लांट्स</option>
                            <option>फुलांचे बोगनवेलिया</option>
                            <option>एक्झोटिक शोभिवंत पाम</option>
                          </>
                        )}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {lang === 'en' ? 'Quantity' : 'प्रमाण'}
                    </label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-purple-600">
                      {lang === 'en' ? (
                        <>
                          <option>50 - 200 Plants</option>
                          <option>200 - 500 Plants</option>
                          <option>500 - 2000 Plants</option>
                          <option>2000+ Wholesale Order</option>
                        </>
                      ) : (
                        <>
                          <option>५० - २०० वनस्पती</option>
                          <option>२०० - ५०० वनस्पती</option>
                          <option>५०० - २००० वनस्पती</option>
                          <option>२०००+ होलसेल ऑर्डर</option>
                        </>
                      )}
                    </select>
                  </div>

                  <button 
                    type="submit"
                    onClick={() => alert(lang === 'en' ? 'Thank you! Our wholesale desk will call you back shortly.' : 'धन्यवाद! आमची होलसेल टीम लवकरच तुम्हाला कॉल करेल.')}
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700 text-white font-bold text-xs uppercase tracking-wider hover:shadow-lg transition-all"
                  >
                    {lang === 'en' ? 'Submit Quote Request' : 'कोटेशन विनंती पाठवा'}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {}
      <section id="location" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-purple-700 uppercase tracking-widest bg-purple-100 border border-purple-200 px-3.5 py-1.5 rounded-full">
              {lang === 'en' ? 'Location & Hours' : 'पत्ता आणि वेळ'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              {lang === 'en' ? 'Visit Creative Hitech Nursery In Uruli Kanchan' : 'उरळी कांचन येथील क्रिएटिव्ह हायटेक नर्सरीला भेट द्या'}
            </h2>
            <p className="text-slate-600 text-sm mt-3 font-normal">
              {lang === 'en' ? 'Located at BAIF Rd, opp. BAIF Research Center. Open 24 Hours for convenience.' : 'बीएआयएफ रोड, बीएआयएफ रिसर्च सेंटर समोर स्थित. सोयीसाठी चोवीस तास सुरू.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <div className="lg:col-span-5 rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {lang === 'en' ? 'Nursery Details' : 'नर्सरी तपशील'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {lang === 'en' ? 'Creative Hitech Nursery Wholesale & Retail' : 'क्रिएटिव्ह हायटेक नर्सरी होलसेल आणि किरकोळ'}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 rounded-2xl bg-purple-100 text-purple-700 shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        {lang === 'en' ? 'Address' : 'पत्ता'}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                        {lang === 'en' ? 'BAIF Rd, opp. BAIF Research Center, Uruli Kanchan, Maharashtra 412202' : 'बीएआयएफ रोड, बीएआयएफ रिसर्च सेंटर समोर, उरळी कांचन, महाराष्ट्र ४१२२०२'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 rounded-2xl bg-indigo-100 text-indigo-700 shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        {lang === 'en' ? 'Phone' : 'मोबाईल नंबर'}
                      </p>
                      <a href="tel:7378748124" className="text-sm font-bold text-purple-700 hover:underline">
                        73787 48124
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 rounded-2xl bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        {lang === 'en' ? 'Hours' : 'वेळ'}
                      </p>
                      <div className="inline-flex items-center space-x-1.5 mt-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                        <span>{lang === 'en' ? 'Open 24 Hours • Every Day' : '२४ तास सुरू • रोज'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <a
                  href="https://maps.google.com/?q=BAIF+Research+Center+Uruli+Kanchan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-md hover:opacity-95 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Get Directions on Google Maps' : 'गुगल मॅपवर दिशा मिळवा'}</span>
                </a>
              </div>

            </div>

            {/* Embedded Google Map Preview */}
            <div className="lg:col-span-7 rounded-3xl bg-slate-100 border border-slate-200/80 overflow-hidden min-h-[350px] relative shadow-sm">
              <iframe
                title="Creative Hitech Nursery Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.823901726084!2d74.1200!3d18.4500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e30000000001%3A0x0!2sBAIF+Research+Center%2C+Uruli+Kanchan%2C+Maharashtra+412202!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>

          </div>

        </div>
      </section>

      {}
      <section id="reviews" className="py-20 bg-purple-50/30 border-t border-purple-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-purple-700 uppercase tracking-widest bg-purple-100 border border-purple-200 px-3.5 py-1.5 rounded-full">
              {lang === 'en' ? 'Reviews & Ratings' : 'अभिप्राय आणि रेटिंग'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              {lang === 'en' ? 'Trusted By Growers & Designers' : 'उत्पादक आणि डिझायनर्सचा विश्वासू'}
            </h2>
            <p className="text-slate-600 text-sm mt-3 font-normal">
              {lang === 'en' ? 'Read feedback from architects, nursery owners, and individuals.' : 'आर्किटेक्ट्स, नर्सरी मालक आणि ग्राहकांचे अभिप्राय वाचा.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {REVIEWS.map(rev => (
              <div key={rev.id} className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    "{lang === 'en' ? rev.comment : rev.commentMr}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900">{lang === 'en' ? rev.name : rev.nameMr}</p>
                    <p className="text-[10px] font-semibold text-purple-600">{lang === 'en' ? rev.role : rev.roleMr}</p>
                  </div>
                  <span className="text-[10px] text-slate-400">{lang === 'en' ? rev.date : rev.dateMr}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Feedback Form */}
          <div className="max-w-2xl mx-auto rounded-3xl bg-white border border-purple-100 p-6 sm:p-8 shadow-lg shadow-purple-900/5">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              {lang === 'en' ? 'Write a Review' : 'अभिप्राय लिहा'}
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              {lang === 'en' ? 'Be the first to leave feedback directly on our site.' : 'आमच्या साईटवर थेट अभिप्राय नोंदवणारे पहिले व्यक्ती व्हा.'}
            </p>

            {feedbackSuccess ? (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  {lang === 'en' ? 'Thank you! Your review has been recorded.' : 'धन्यवाद! तुमचा अभिप्राय नोंदवला गेला आहे.'}
                </span>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'en' ? 'Your Name' : 'तुमचे नाव'}
                  </label>
                  <input
                    type="text"
                    required
                    value={feedbackName}
                    onChange={(e) => setFeedbackName(e.target.value)}
                    placeholder={lang === 'en' ? 'Enter your name' : 'तुमचे नाव प्रविष्ट करा'}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-purple-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'en' ? 'Your Feedback' : 'तुमचा अभिप्राय'}
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={feedbackComment}
                    onChange={(e) => setFeedbackComment(e.target.value)}
                    placeholder={lang === 'en' ? 'Write about plant quality, pricing or service...' : 'वनस्पती गुणवत्ता, किंमत किंवा सेवेबद्दल लिहा...'}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-purple-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs shadow-md hover:opacity-95 transition-opacity flex items-center space-x-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Submit Review' : 'अभिप्राय पाठवा'}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {}
      <footer className="bg-white border-t border-slate-200 py-12 relative z-10 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                  <Leaf className="w-4 h-4" />
                </div>
                <span className="text-base font-extrabold text-slate-900">creative hitech nursery</span>
              </div>
              <p className="text-slate-500 leading-relaxed font-normal">
                {lang === 'en' 
                  ? 'Wholesale plant nursery in Uruli Kanchan, Maharashtra supplying all type indoor and outdoor premium plants.' 
                  : 'उरळी कांचन, महाराष्ट्र येथील होलसेल प्लांट नर्सरी जी सर्व प्रकारच्या इनडोअर व आऊटडोअर प्रीमियम वनस्पती पुरवते.'}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase text-slate-900 mb-3 tracking-wider">
                {lang === 'en' ? 'Navigation' : 'नेव्हिगेशन'}
              </h4>
              <ul className="space-y-2">
                <li><a href="#hero" className="hover:text-purple-600 transition-colors">{lang === 'en' ? 'Home' : 'मुख्यपृष्ठ'}</a></li>
                <li><a href="#catalog" className="hover:text-purple-600 transition-colors">{lang === 'en' ? 'Plant Catalog' : 'वनस्पती कॅटलॉग'}</a></li>
                <li><a href="#wholesale" className="hover:text-purple-600 transition-colors">{lang === 'en' ? 'Wholesale Orders' : 'होलसेल ऑर्डर्स'}</a></li>
                <li><a href="#location" className="hover:text-purple-600 transition-colors">{lang === 'en' ? 'Location & Hours' : 'पत्ता आणि वेळ'}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase text-slate-900 mb-3 tracking-wider">
                {lang === 'en' ? 'Plant Stock' : 'वनस्पती स्टॉक'}
              </h4>
              <ul className="space-y-2 text-slate-500">
                {lang === 'en' ? (
                  <>
                    <li>Indoor Premium Palms & Monstera</li>
                    <li>Outdoor Landscaping Hedge Plants</li>
                    <li>Grafted Bougainvillea & Flowering</li>
                    <li>Exotic Ornamental Foliage</li>
                  </>
                ) : (
                  <>
                    <li>इनडोअर प्रीमियम पाम्स आणि मॉन्स्टेरा</li>
                    <li>आऊटडोअर लँडस्केपिंग हेज प्लांट्स</li>
                    <li>ग्राफ्टेड बोगनवेलिया आणि फुले</li>
                    <li>एक्झोटिक शोभिवंत रोपे</li>
                  </>
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase text-slate-900 mb-3 tracking-wider">
                {lang === 'en' ? 'Direct Contact' : 'थेट संपर्क'}
              </h4>
              <p className="text-slate-600">
                {lang === 'en' ? 'BAIF Rd, opp. BAIF Research Center, Uruli Kanchan, Maharashtra 412202' : 'बीएआयएफ रोड, बीएआयएफ रिसर्च सेंटर समोर, उरळी कांचन, महाराष्ट्र ४१२२०२'}
              </p>
              <p className="text-purple-700 font-bold mt-2">Phone: 73787 48124</p>
              <p className="text-slate-500 mt-0.5">
                {lang === 'en' ? 'Open 24 Hours' : 'चोवीस तास सुरू'}
              </p>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400">
            <p>© {new Date().getFullYear()} Creative Hitech Nursery. {lang === 'en' ? 'All rights reserved.' : 'सर्व हक्क राखीव.'}</p>
            <p className="mt-2 sm:mt-0">
              {lang === 'en' ? 'Wholesale Nursery Platform • Uruli Kanchan, Maharashtra' : 'होलसेल नर्सरी प्लॅटफॉर्म • उरळी कांचन, महाराष्ट्र'}
            </p>
          </div>
        </div>
      </footer>

      {}
      <div className="fixed bottom-5 right-5 z-40 flex items-center space-x-2 sm:space-x-3">
        <a
          href="https://wa.me/917378748124?text=Hello%20Creative%20Hitech%20Nursery,%20I%20want%20to%20inquire%20about%20plants."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-emerald-500 text-white font-bold shadow-xl hover:scale-105 active:scale-95 transition-transform flex items-center space-x-2"
          title="WhatsApp Us"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="hidden sm:inline text-xs font-bold">
            {lang === 'en' ? 'WhatsApp Inquiry' : 'व्हॉट्सॲप चौकशी'}
          </span>
        </a>

        <a
          href="tel:7378748124"
          className="p-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-xl hover:scale-105 active:scale-95 transition-transform flex items-center space-x-2"
          title="Call Now"
        >
          <Phone className="w-5 h-5" />
          <span className="hidden sm:inline text-xs font-bold">73787 48124</span>
        </a>
      </div>

    </div>
  );
}