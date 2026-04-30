import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Globe, Play, Camera, Star, Cloud, CheckCircle2, ChevronRight, Apple, Smartphone, Monitor, Quote } from 'lucide-react';

interface SharedProps {
  setPage: (page: 'home' | 'pricing' | 'business') => void;
  key?: React.Key;
}

const Navbar = ({ setPage }: SharedProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl transition-all duration-300">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-6 md:px-8 py-4">
        <div 
          className="text-2xl font-black text-white tracking-tighter cursor-pointer text-brand-gradient"
          onClick={() => setPage('home')}
        >
          CamBuddy
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
          <button 
            onClick={() => setPage('home')}
            className="font-semibold text-sm uppercase text-white/70 hover:text-white transition-colors"
          >
            Trang chủ
          </button>
          <button 
            onClick={() => setPage('pricing')}
            className="font-semibold text-sm uppercase text-white/70 hover:text-white transition-colors"
          >
            Mức giá
          </button>
          <button 
            onClick={() => setPage('business')}
            className="font-semibold text-sm uppercase text-white/70 hover:text-white transition-colors"
          >
            Dành cho doanh nghiệp
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input 
              type="text" 
              placeholder="Tìm kiếm cảm hứng..." 
              className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary-container w-48 lg:w-64 transition-all"
            />
          </div>
          <button className="text-white/70 hover:text-white text-sm font-bold transition-all px-4">Login</button>
          <button className="bg-brand-gradient px-6 py-2 rounded-full font-bold text-white text-sm hover:scale-105 transition-all shadow-[0_0_20px_rgba(118,90,255,0.3)]">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black w-full border-t border-white/10 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="flex flex-col gap-4 max-w-xs">
            <span className="text-2xl font-black text-white uppercase tracking-tighter">CamBuddy</span>
            <p className="text-on-surface-variant text-sm">
              © 2024 Lumina Photography. Professional grade creative tools.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Khám phá</h4>
              <a href="#" className="text-on-surface-variant hover:text-white text-sm transition-colors">Cách hoạt động</a>
              <a href="#" className="text-on-surface-variant hover:text-white text-sm transition-colors">Tính năng chính</a>
              <a href="#" className="text-on-surface-variant hover:text-white text-sm transition-colors">Before / After</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Ứng dụng</h4>
              <a href="#" className="text-on-surface-variant hover:text-white text-sm transition-colors">App Store</a>
              <a href="#" className="text-on-surface-variant hover:text-white text-sm transition-colors">Google Play</a>
              <a href="#" className="text-on-surface-variant hover:text-white text-sm transition-colors">Bảng giá</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Hỗ trợ</h4>
              <a href="#" className="text-on-surface-variant hover:text-white text-sm transition-colors">Privacy</a>
              <a href="#" className="text-on-surface-variant hover:text-white text-sm transition-colors">Terms</a>
              <a href="#" className="text-on-surface-variant hover:text-white text-sm transition-colors">FAQ</a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30 lowercase font-medium">© 2024 MyCamera. Light meets logic.</p>
          <div className="flex gap-6">
            <Globe className="w-5 h-5 text-on-surface-variant hover:text-white cursor-pointer transition-colors" />
            <Smartphone className="w-5 h-5 text-on-surface-variant hover:text-white cursor-pointer transition-colors" />
            <Monitor className="w-5 h-5 text-on-surface-variant hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const HomePage = ({ setPage }: SharedProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      {/* Hero Section */}
      <section className="px-6 md:px-8 py-16 md:py-24 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-primary text-sm font-bold tracking-[0.2em] mb-4 uppercase">AI PHOTOGRAPHY REVOLUTION</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-6">
                CamBuddy AI <br />
                <span className="shimmer-text">Biến mọi khoảnh khắc</span> thành ảnh hoàn hảo
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-lg font-medium">
                Giải pháp chụp ảnh thông minh giúp khách hàng có ảnh đẹp ngay lần đầu – không cần thử lại. Nâng tầm trải nghiệm check-in cho doanh nghiệp của bạn.
              </p>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setPage('business')}
                className="bg-brand-gradient px-8 py-4 rounded-xl font-black text-white uppercase tracking-wider hover:shadow-[0_0_30px_rgba(118,90,255,0.4)] transition-all hover:scale-105 active:scale-95"
              >
                Hợp tác với chúng tôi
              </button>
              <button className="border-2 border-white/10 px-8 py-4 rounded-xl font-black text-white uppercase tracking-wider hover:bg-white/5 transition-colors">
                Xem demo ứng dụng
              </button>
            </div>
          </div>
          
          <div className="relative">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative group"
            >
              <img 
                src="https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&q=80&w=1000" 
                alt="AI Photography" 
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Camera className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-black text-white uppercase text-base tracking-tight">AI Real-time Beauty</p>
                  <p className="text-sm text-on-surface-variant">Tự động cân chỉnh ánh sáng & góc mặt</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="px-6 md:px-8 py-24 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4 uppercase">Khám phá ý tưởng từ mọi người</h2>
              <p className="text-on-surface-variant max-w-xl text-lg">Khám phá vô vàn phong cách sáng tạo từ những người dùng khác và tìm cảm hứng cho bức ảnh tiếp theo.</p>
            </div>
            <button className="flex items-center gap-2 text-primary font-bold group text-sm uppercase tracking-widest">
              Xem tất cả <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-4 rounded-2xl flex flex-col gap-4 group"
              >
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000}?auto=format&fit=crop&q=80&w=500`} 
                    alt="Community idea" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <p className="text-sm italic text-white/50 leading-relaxed">
                  {i === 1 && "\"Góc nhìn nghệ thuật từ chuyến đi Đà Lạt của @MinhAnh\""}
                  {i === 2 && "\"Hoàng hôn rực rỡ tại Phú Quốc chia sẻ bởi @HoangLe\""}
                  {i === 3 && "\"Nét cổ kính của Hội An qua ống kính @ThuyDung\""}
                  {i === 4 && "\"Kỷ niệm đáng nhớ cùng hội bạn thân tại TP.HCM\""}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="px-6 md:px-8 py-24 max-w-[1280px] mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">Mọi công cụ bạn cần</h2>
          <div className="h-1.5 w-24 bg-brand-gradient mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-10 rounded-3xl group hover:border-primary/50 transition-all">
            <Camera className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-black mb-4 uppercase">Lựa pose nhanh hơn</h3>
            <p className="text-on-surface-variant">Dễ dàng chọn lựa tư thế chụp ảnh phù hợp nhất từ thư viện đa dạng.</p>
          </div>
          <div className="glass-card p-10 rounded-3xl border-primary/30 scale-105 shadow-[0_0_40px_rgba(118,90,255,0.15)] bg-primary-container/10">
            <Star className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h3 className="text-2xl font-black mb-4 uppercase">AI đề xuất tạo dáng</h3>
            <p className="text-on-surface-variant">Hệ thống AI tự động phân tích bối cảnh và gợi ý những dáng chụp nghệ thuật nhất.</p>
          </div>
          <div className="glass-card p-10 rounded-3xl group hover:border-primary/50 transition-all">
            <Cloud className="w-12 h-12 text-tertiary mx-auto mb-6" />
            <h3 className="text-2xl font-black mb-4 uppercase">AI nhắc nhở khi chụp</h3>
            <p className="text-on-surface-variant">Nhận thông báo và hướng dẫn trực tiếp từ AI để có khung hình hoàn hảo nhất.</p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">Get the free app</h2>
          <p className="text-on-surface-variant text-lg mb-12 max-w-2xl mx-auto">
            Trải nghiệm quyền năng sáng tạo AI trong lòng bàn tay. Tải ngay ứng dụng hoàn toàn miễn phí.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="flex items-center gap-4 bg-white text-black px-8 py-3 rounded-2xl hover:scale-105 transition-all">
              <Apple className="w-8 h-8" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold opacity-60">Download on the</p>
                <p className="text-xl font-bold">App Store</p>
              </div>
            </button>
            <button className="flex items-center gap-4 bg-white text-black px-8 py-3 rounded-2xl hover:scale-105 transition-all">
              <Smartphone className="w-8 h-8" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold opacity-60">Get it on</p>
                <p className="text-xl font-bold">Google Play</p>
              </div>
            </button>
            <button className="flex items-center gap-4 bg-white text-black px-8 py-3 rounded-2xl hover:scale-105 transition-all">
              <Monitor className="w-8 h-8" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold opacity-60">Download for</p>
                <p className="text-xl font-bold">Windows</p>
              </div>
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const PricingPage = ({ setPage }: SharedProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 max-w-[1280px] mx-auto px-8"
    >
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 mb-6 rounded-full border border-primary/30 bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest">Nâng Tầm Hình Ảnh</span>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter shimmer-text uppercase">Chụp ảnh đẹp ngay từ lần đầu</h1>
        <p className="max-w-2xl mx-auto text-on-surface-variant text-lg mb-12">
          Dùng Premium để có bố cục, dáng chụp và góc máy tối ưu cho từng bối cảnh mà không cần thử lại nhiều lần. Có thể hủy bất cứ lúc nào.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {/* Free Plan */}
        <div className="glass-card rounded-[2.5rem] p-10 flex flex-col h-full hover:border-white/20 transition-all duration-500">
          <div className="mb-8">
            <h3 className="text-2xl font-black mb-2 uppercase">Miễn Phí</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black">0 VNĐ</span>
              <span className="text-on-surface-variant text-sm">/ tháng</span>
            </div>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            {[
              "5 mẫu bố cục AI cơ bản",
              "Pose cơ bản",
              "Cảnh báo lỗi đơn giản",
              "Độ phân giải Standard",
              "500 MB cloud lưu trữ"
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-on-surface-variant text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                {item}
              </li>
            ))}
            <li className="flex items-start gap-3 text-red-400/70 text-sm font-medium italic">
              <span className="w-5 h-5 flex items-center justify-center font-bold">!</span>
              Có watermark & quảng cáo
            </li>
          </ul>
          <button className="w-full py-4 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all">
            Bắt đầu ngay
          </button>
        </div>

        {/* Annual Premium */}
        <div className="relative group p-[2px] rounded-[2.5rem] overflow-hidden bg-brand-gradient shadow-[0_0_50px_rgba(118,90,255,0.25)] scale-105 z-10">
          <div className="h-full w-full bg-surface-container rounded-[calc(2.5rem-2px)] p-10 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 px-6 py-2 bg-brand-gradient text-white font-black text-[10px] uppercase tracking-widest rounded-bl-2xl">Best Value</div>
            <div className="mb-8">
              <h3 className="text-2xl font-black mb-2 text-primary uppercase">Annual Premium</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-white">99.000 VNĐ</span>
                <span className="text-on-surface-variant text-sm">/ năm</span>
              </div>
              <p className="text-secondary text-sm mt-2 font-bold uppercase tracking-tight">~300 VNĐ / ngày</p>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "Toàn bộ Monthly Features",
                "Pose nâng cao + Creator Pose",
                "Lưu template cá nhân",
                "Ultra HD / ProRAW",
                "50 GB cloud lưu trữ",
                "Ưu tiên tính năng mới sớm nhất"
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-white text-sm font-bold">
                  <Star className="w-5 h-5 text-secondary shrink-0 fill-secondary" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl bg-brand-gradient text-white font-black uppercase tracking-wider hover:scale-105 transition-all shadow-lg">
              Nâng cấp ngay
            </button>
          </div>
        </div>

        {/* Monthly Premium */}
        <div className="glass-card rounded-[2.5rem] p-10 flex flex-col h-full hover:border-white/20 transition-all duration-500">
          <div className="mb-8">
            <h3 className="text-2xl font-black mb-2 uppercase">Monthly Premium</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-secondary">19.000 VNĐ</span>
              <span className="text-on-surface-variant text-sm">/ tháng</span>
            </div>
            <p className="text-on-surface-variant text-sm mt-2 font-medium">~600 VNĐ / ngày</p>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            {[
              "Toàn bộ thư viện (100+ mẫu)",
              "Pose trending cập nhật liên tục",
              "AI phân tích real-time",
              "AI Insight & Ghost Pose",
              "Ảnh HD không watermark",
              "5 GB cloud lưu trữ"
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-on-surface-variant text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-xl border border-primary/30 text-primary font-bold hover:bg-primary/5 transition-all">
            Dùng thử 7 ngày
          </button>
        </div>
      </div>
      
      {/* Comparison Table */}
      <section className="mb-32 overflow-x-auto">
        <h2 className="text-3xl font-black mb-12 text-center uppercase tracking-tighter">So Sánh Tính Năng</h2>
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-white/10 uppercase font-black text-xs tracking-widest text-on-surface-variant">
              <th className="py-6 px-4">Tính năng</th>
              <th className="py-6 px-4 text-center">Miễn phí</th>
              <th className="py-6 px-4 text-center text-primary">Monthly</th>
              <th className="py-6 px-4 text-center text-secondary">Annual</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {[
              { f: "Bố cục ảnh gợi ý", p1: "Cơ bản (5)", p2: "Nâng cao (100+)", p3: "Tất cả + Custom" },
              { f: "Hướng dẫn tạo dáng", p1: "✓", p2: "✓✓", p3: "✓✓✓ (Creator)" },
              { f: "Phát hiện lỗi", p1: "Đơn giản", p2: "Nâng cao", p3: "Pro Analysis" },
              { f: "Độ phân giải", p1: "Standard", p2: "HD", p3: "Ultra HD / ProRAW" },
              { f: "Lưu trữ Cloud", p1: "500 MB", p2: "5 GB", p3: "50 GB" }
            ].map((row, i) => (
              <tr key={i} className="hover:bg-white/5 transition-colors">
                <td className="py-5 px-4 font-bold text-sm uppercase">{row.f}</td>
                <td className="py-5 px-4 text-center text-on-surface-variant text-sm">{row.p1}</td>
                <td className="py-5 px-4 text-center text-on-surface-variant text-sm">{row.p2}</td>
                <td className="py-5 px-4 text-center font-black text-sm">{row.p3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </motion.div>
  );
};

const BusinessPage = ({ setPage }: SharedProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <section className="relative pt-24 pb-32 overflow-hidden px-8 max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="font-bold text-primary mb-6 block uppercase tracking-[0.3em] text-sm">AI PHOTOGRAPHY REVOLUTION</span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] uppercase tracking-tighter">
              CamBuddy AI – <br />
              <span className="shimmer-text">GIẢI PHÁP HÌNH ẢNH</span> <br />
              CHO DOANH NGHIỆP
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl mb-12 max-w-lg font-medium">
              Cách mạng hóa trải nghiệm khách hàng với công nghệ AI chụp ảnh đỉnh cao ngay tại cửa hàng của bạn.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-gradient px-10 py-5 rounded-xl font-black text-white hover:shadow-[0_0_40px_rgba(249,90,255,0.4)] transition-all uppercase tracking-widest text-sm">
                Hợp tác ngay
              </button>
              <button className="border-2 border-white/20 px-10 py-5 rounded-xl font-black text-white hover:bg-white/5 transition-all uppercase tracking-widest text-sm">
                Xem Catalog
              </button>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary-container/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative rounded-[3rem] overflow-hidden border border-white/20 aspect-square shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000" 
                alt="Business environment" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-brand-gradient">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-2xl uppercase text-white">AI Branded Frames</p>
                    <p className="text-white/60 font-medium">Tự động nhận diện & gắn frame thương hiệu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-20">
            <span className="font-bold text-primary mb-4 block uppercase tracking-widest text-sm">CORE SOLUTIONS</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-none tracking-tighter">Giải pháp cho mọi địa điểm</h2>
            <div className="w-24 h-2 bg-brand-gradient rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Frame Check-in riêng", d: "Định vị thương hiệu qua mỗi bức ảnh khách hàng chia sẻ.", icon: "Frame" },
              { t: "AI Hỗ Trợ Tạo Dáng", d: "Gợi ý tư thế chuyên nghiệp phù hợp với bối cảnh.", icon: "Star" },
              { t: "AI Touch-up Tự Động", d: "Chỉnh sửa tự nhiên, giữ trọn thần thái tức thì.", icon: "Sparkles" },
              { t: "Chụp 1 lần – Hoàn hảo", d: "Tiết kiệm thời gian, khách hàng hài lòng tuyệt đối.", icon: "Zap" }
            ].map((card, i) => (
              <div key={i} className="glass-card p-10 rounded-3xl hover:border-primary/50 transition-all group cursor-pointer border-white/5">
                <div className="aspect-square bg-white/5 rounded-2xl mb-8 overflow-hidden group-hover:bg-primary/20 transition-all flex items-center justify-center">
                   <div className="w-16 h-16 rounded-full bg-brand-gradient flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      {i === 0 && <Monitor className="w-8 h-8 text-white" />}
                      {i === 1 && <Star className="w-8 h-8 text-white" />}
                      {i === 2 && <CheckCircle2 className="w-8 h-8 text-white" />}
                      {i === 3 && <Play className="w-8 h-8 text-white" />}
                   </div>
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase leading-none">{card.t}</h3>
                <p className="text-on-surface-variant font-medium leading-relaxed">{card.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-32 px-8 max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6 pt-12">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=500" className="rounded-3xl w-full h-80 object-cover shadow-2xl" />
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=500" className="rounded-3xl w-full h-64 object-cover border-2 border-primary/20" />
            </div>
            <div className="space-y-6">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=500" className="rounded-3xl w-full h-64 object-cover" />
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=500" className="rounded-3xl w-full h-80 object-cover shadow-2xl" />
            </div>
          </div>
          
          <div>
            <span className="font-bold text-primary mb-6 block uppercase tracking-[0.3em] text-sm">WHY CHOOSE US</span>
            <h2 className="text-6xl font-black mb-12 uppercase leading-[0.85] tracking-tighter shimmer-text">GIÁ TRỊ CHO <br />ĐỐI TÁC</h2>
            <div className="space-y-12">
              {[
                { t: "Tăng tỷ lệ khách quay lại", d: "Tạo trải nghiệm thú vị và hình ảnh lưu niệm chất lượng cao." },
                { t: "Marketing 0 đồng hiệu quả", d: "Khách hàng tự tin chia sẻ ảnh đẹp lên mạng xã hội kèm tag thương hiệu." },
                { t: "Hợp tác bền vững", d: "Hỗ trợ kỹ thuật và cập nhật tính năng AI mới nhất liên tục." }
              ].map(val => (
                <div key={val.t} className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-brand-gradient group-hover:border-transparent transition-all">
                    <CheckCircle2 className="w-8 h-8 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black uppercase mb-2 leading-none">{val.t}</h4>
                    <p className="text-on-surface-variant text-lg font-medium leading-relaxed">{val.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TVC & App Demo Section */}
      <section className="py-24 px-8 max-w-[1280px] mx-auto overflow-hidden">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold text-primary mb-4 block uppercase tracking-[0.4em] text-xs"
          >
            Experience the Future
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tight leading-none"
          >
            App Demo & TVC
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1.5 w-32 bg-brand-gradient mx-auto rounded-full origin-center"
          ></motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group aspect-video max-w-[1000px] mx-auto rounded-[2.5rem] overflow-hidden border border-white/20 shadow-2xl"
        >
          {/* Video Placeholder Image */}
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200" 
            alt="App Demo and TVC Background" 
            className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-[2s]"
          />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center group/btn relative overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover/btn:opacity-20 transition-opacity"></div>
              <Play className="w-10 h-10 text-white fill-white ml-1 transition-transform group-hover/btn:scale-110" />
            </motion.button>
          </div>

          {/* Glowing accents */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
            <div className="space-y-2">
              <p className="text-white/40 font-black uppercase text-[10px] tracking-widest">Featured Story</p>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight">The Future of Retail Photography</h3>
            </div>
            <div className="text-right">
              <p className="text-white font-black text-sm uppercase tracking-tighter">02:45</p>
              <p className="text-white/40 text-[10px] uppercase font-bold">4K Cinema Experience</p>
            </div>
          </div>
        </motion.div>

        {/* Supporting info */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-[1000px] mx-auto">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl"
          >
            <h4 className="text-xl font-black mb-4 uppercase tracking-tight text-primary">TVC Commercial</h4>
            <p className="text-on-surface-variant font-medium text-sm leading-relaxed">
              Khám phá cách CamBuddy AI thay đổi hoàn toàn cách doanh nghiệp và khách hàng tương tác qua hình ảnh trong đoạn phim quảng cáo 30s mới nhất của chúng tôi.
            </p>
          </motion.div>
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl"
          >
            <h4 className="text-xl font-black mb-4 uppercase tracking-tight text-secondary">Interactive Demo</h4>
            <p className="text-on-surface-variant font-medium text-sm leading-relaxed">
              Trải nghiệm thực tế các tính năng AI hướng dẫn tạo dáng và chụp ảnh thông minh qua bản demo ứng dụng, giúp bạn dễ dàng thuyết phục khách hàng.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-8 bg-black">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: "1M+", l: "Ảnh được chụp" },
            { n: "300M+", l: "Lượt chỉnh sửa AI" },
            { n: "1B+", l: "Người dùng toàn cầu" },
            { n: "2.5B+", l: "Tương tác xã hội" }
          ].map((stat, i) => (
            <div key={i} className="text-center glass-card p-12 rounded-[2rem] hover:scale-105 transition-all">
              <p className="text-5xl font-black shimmer-text mb-2">{stat.n}</p>
              <p className="text-xs font-black text-on-surface-variant uppercase tracking-widest">{stat.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-8 bg-surface-container">
        <div className="max-w-[800px] mx-auto glass-card p-12 md:p-20 rounded-[3rem] shadow-2xl border-white/20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black uppercase mb-6 tracking-tighter">Liên hệ hợp tác</h2>
            <p className="text-on-surface-variant font-medium text-lg">Bắt đầu hành trình đột phá doanh thu cùng chúng tôi</p>
          </div>
          
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Họ và tên</label>
                <input className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-6 py-4 text-white font-bold focus:border-primary focus:outline-none transition-all" placeholder="Nguyễn Văn A" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Email</label>
                <input className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-6 py-4 text-white font-bold focus:border-primary focus:outline-none transition-all" placeholder="contact@business.com" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Số điện thoại</label>
              <input className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-6 py-4 text-white font-bold focus:border-primary focus:outline-none transition-all" placeholder="090 123 4567" />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Tên doanh nghiệp</label>
              <input className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-6 py-4 text-white font-bold focus:border-primary focus:outline-none transition-all" placeholder="Tên quán Cafe / Spa..." />
            </div>
            <button className="w-full bg-brand-gradient py-6 rounded-2xl font-black text-white text-xl uppercase tracking-[0.2em] shadow-lg hover:shadow-[0_0_40px_rgba(118,90,255,0.4)] transition-all mt-8">
              Gửi yêu cầu ngay
            </button>
          </form>
        </div>
      </section>
    </motion.div>
  );
};

export default function App() {
  const [page, setPage] = React.useState<'home' | 'pricing' | 'business'>('home');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="min-h-screen bg-surface selection:bg-primary-container selection:text-white">
      <Navbar setPage={setPage} />
      
      <main>
        <AnimatePresence mode="wait">
          {page === 'home' && <HomePage key="home" setPage={setPage} />}
          {page === 'pricing' && <PricingPage key="pricing" setPage={setPage} />}
          {page === 'business' && <BusinessPage key="business" setPage={setPage} />}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
