import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Globe, Play, Camera, Star, Cloud, CheckCircle2, ChevronRight, Apple, Smartphone, Monitor, Quote, X } from 'lucide-react';

interface SharedProps {
  setPage: (page: 'home' | 'pricing' | 'business') => void;
  key?: React.Key;
}

const Navbar = ({ setPage }: SharedProps) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10 flex flex-col transition-all duration-300">
      <div className="w-full max-w-[1280px] mx-auto flex justify-between items-center px-6 md:px-8 py-4">
        <div className="flex items-center gap-8">
          <span 
            className="text-2xl font-black bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent cursor-pointer tracking-tight"
            onClick={() => setPage('home')}
          >
            CamBuddy
          </span>
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => setPage('pricing')}
              className="text-white/70 hover:text-white transition-all duration-300 font-semibold text-sm"
            >
              Mức giá
            </button>
            <button 
              onClick={() => setPage('business')}
              className="text-white/70 hover:text-white transition-all duration-300 font-semibold text-sm"
            >
              Dành cho doanh nghiệp
            </button>
          </nav>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative hidden lg:block">
            <input 
              type="text" 
              placeholder="Bạn đang tìm kiếm nội dung gì" 
              className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-indigo-500 w-64 transition-all"
            />
            <Search className="absolute right-3 top-2.5 w-4 h-4 text-white/40" />
          </div>
          <div className="flex items-center gap-4">
            <button className="text-white/70 hover:text-white font-bold text-sm transition-all">Login</button>
            <button className="bg-brand-gradient px-6 py-2 rounded-full font-bold text-white text-sm bloom-effect hover:scale-105 active:scale-95 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black w-full border-t border-white/10 py-12 text-sm">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-xl font-extrabold text-white tracking-tight">CamBuddy</span>
          <p className="text-white/40 max-w-xs text-center md:text-left font-medium">
            © 2024 Lumina Photography. Professional grade creative tools.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="text-white/40 hover:text-primary transition-colors font-medium" href="#">App Store</a>
          <a className="text-white/40 hover:text-primary transition-colors font-medium" href="#">Google Play</a>
          <a className="text-white/40 hover:text-primary transition-colors font-medium" href="#">Microsoft Store</a>
          <a className="text-white/40 hover:text-primary transition-colors font-medium" href="#">Privacy</a>
          <a className="text-white/40 hover:text-primary transition-colors font-medium" href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

const DownloadSection = () => {
  return (
    <section className="px-6 md:px-8 py-24 bg-black border-t border-white/5 max-w-[1280px] mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-black mb-4">Get the free app</h2>
      <p className="text-on-surface-variant text-lg mb-12 max-w-2xl mx-auto">
        Trải nghiệm quyền năng sáng tạo AI trong lòng bàn tay. Tải ngay ứng dụng hoàn toàn miễn phí.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        <button className="bg-white px-8 py-3 rounded-2xl flex items-center gap-4 text-black hover:scale-105 transition-all shadow-xl">
          <svg className="w-8 h-8 fill-black" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
          </svg>
          <div className="text-left">
            <p className="text-[10px] uppercase font-black opacity-60">Download on the</p>
            <p className="text-xl font-bold">App Store</p>
          </div>
        </button>
        <button className="bg-white px-8 py-3 rounded-2xl flex items-center gap-4 text-black hover:scale-105 transition-all shadow-xl">
          <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.1-.83V2.645a.997.997 0 01.1-.831z" fill="#00E5FF"/>
            <path d="M17.144 8.65L3.609 1.814a.997.997 0 01.446-.11c.21 0 .42.06.603.176l12.513 7.828-3.379 2.292L17.144 8.65z" fill="#00FF72"/>
            <path d="M17.144 15.35L13.792 12l3.352-3.35 3.379 2.112c.553.345.882.955.882 1.608 0 .653-.329 1.263-.882 1.608L17.144 15.35z" fill="#FFD500"/>
            <path d="M3.61 22.186a.997.997 0 01-.447-.11 1.002 1.002 0 01-.156-1.536l10.785-11.378 3.352 3.35-13.534 9.674z" fill="#FF3C32"/>
          </svg>
          <div className="text-left">
            <p className="text-[10px] uppercase font-black opacity-60">Get it on</p>
            <p className="text-xl font-bold">Google Play</p>
          </div>
        </button>
        <button className="bg-white px-8 py-3 rounded-2xl flex items-center gap-4 text-black hover:scale-105 transition-all shadow-xl">
          <Monitor className="w-8 h-8" />
          <div className="text-left">
            <p className="text-[10px] uppercase font-black opacity-60">Download for</p>
            <p className="text-xl font-bold">Windows</p>
          </div>
        </button>
      </div>
      
      <div className="flex justify-center gap-8">
        <button className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-brand-gradient transition-all group">
          <Globe className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-brand-gradient transition-all group">
          <Smartphone className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-brand-gradient transition-all group">
          <Monitor className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </section>
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                CamBuddy AI <br />
                <span className="shimmer-text">Biến mọi khoảnh khắc</span> thành ảnh hoàn hảo
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg">
                Giải pháp chụp ảnh thông minh giúp khách hàng có ảnh đẹp ngay lần đầu – không cần thử lại. Nâng tầm trải nghiệm check-in cho doanh nghiệp của bạn.
              </p>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => setPage('business')}
                className="bg-brand-gradient px-8 py-4 rounded-xl font-bold text-white uppercase tracking-wide hover:scale-105 transition-transform shadow-lg"
              >
                HỢP TÁC VỚI CHÚNG TÔI
              </button>
              <button className="border-2 border-white/20 px-8 py-4 rounded-xl font-bold text-white uppercase tracking-wide hover:bg-white/5 transition-colors">
                XEM DEMO ỨNG DỤNG
              </button>
            </div>
          </div>
          
          <div className="relative">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="rounded-3xl overflow-hidden shadow-2xl relative group"
            >
              <img 
                src="https://i.postimg.cc/BZ5FFnF7/4.png" 
                alt="AI Photography Illustration" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-2xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                  <Camera className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-white text-lg leading-tight">AI Real-time Beauty</p>
                  <p className="text-sm text-white/60 leading-tight">Tự động cân chỉnh ánh sáng & góc mặt</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="px-6 md:px-8 py-20 bg-surface-container-low max-w-[1280px] mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Khám phá ý tưởng và bài đăng từ mọi người xung quanh</h2>
              <p className="text-on-surface-variant max-w-xl">Khám phá vô vàn phong cách sáng tạo từ những người dùng khác và tìm cảm hứng cho bức ảnh tiếp theo của riêng bạn</p>
            </div>
            <button className="flex items-center gap-2 text-primary font-bold group">
              Xem tất cả <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                img: "https://i.postimg.cc/xdq8F0c1/1.png",
                text: "\"Góc nhìn nghệ thuật từ chuyến đi Đà Lạt của @MinhAnh\""
              },
              {
                img: "https://i.postimg.cc/Gp9tScHp/2.png",
                text: "\"Hoàng hôn rực rỡ tại Phú Quốc chia sẻ bởi @HoangLe\""
              },
              {
                img: "https://i.postimg.cc/FK1zn979/3.jpg",
                text: "\"Nét cổ kính của Hội An qua ống kính @ThuyDung\""
              },
              {
                img: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=600",
                text: "\"Kỷ niệm đáng nhớ cùng hội bạn thân tại TP.HCM\""
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-4 rounded-xl flex flex-col gap-4 group"
              >
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={item.img} 
                    alt="Community post" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <p className="text-sm italic text-white/50 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="px-6 md:px-8 py-24 max-w-[1280px] mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mọi công cụ bạn cần</h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-2xl text-center flex flex-col items-center group">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
              <Camera className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-2xl font-bold mb-4">Lựa pose nhanh hơn</h4>
            <p className="text-on-surface-variant">Dễ dàng chọn lựa tư thế chụp ảnh phù hợp nhất từ thư viện đa dạng.</p>
          </div>
          <div className="glass-card p-10 rounded-2xl text-center flex flex-col items-center border-primary/30 scale-105 shadow-[0_0_30px_rgba(118,90,255,0.1)]">
            <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-primary fill-primary" />
            </div>
            <h4 className="text-2xl font-bold mb-4">AI đề xuất tạo dáng thông minh</h4>
            <p className="text-on-surface-variant">Hệ thống AI tự động phân tích bối cảnh và gợi ý những dáng chụp nghệ thuật nhất.</p>
          </div>
          <div className="glass-card p-8 rounded-2xl text-center flex flex-col items-center group">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
              <Cloud className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-2xl font-bold mb-4">AI nhắc nhở khi chụp</h4>
            <p className="text-on-surface-variant">Nhận thông báo và hướng dẫn trực tiếp từ AI để có khung hình hoàn hảo nhất.</p>
          </div>
        </div>
      </section>

      {/* Cloud & Storage Section */}
      <section className="px-6 md:px-8 py-24 relative overflow-hidden max-w-[1280px] mx-auto">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-primary-container to-transparent blur-3xl"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Trải nghiệm liền mạch, lưu trữ an toàn</h2>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-lg">Đồng bộ đám mây thông minh</h5>
                  <p className="text-on-surface-variant">Tự động sao lưu mọi khoảnh khắc với chất lượng cao nhất (Ultra HD, ProRaw). Không lo đầy bộ nhớ điện thoại, dễ dàng truy cập ảnh từ bất kỳ thiết bị nào.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-lg">Chia sẻ & Xuất ảnh tức thì</h5>
                  <p className="text-on-surface-variant">Bắt trọn những khung hình hoàn hảo và sẵn sàng tải xuống hoặc "flex" ngay lên mạng xã hội chỉ với một chạm.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 glass-card p-4 rounded-3xl w-full">
            <div className="rounded-2xl overflow-hidden aspect-video relative group">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" 
                alt="Seamless experience" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 md:px-8 py-24 mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-white text-black p-10 rounded-3xl flex flex-col justify-center items-start">
            <h2 className="text-3xl font-bold mb-4 leading-tight">Tham gia hàng triệu người dùng phát triển cùng CamBuddy</h2>
            <p className="text-gray-600 mb-8 text-sm">Được tin cậy bởi hơn 150 triệu nhà sáng tạo và doanh nghiệp toàn cầu.</p>
            <button className="bg-brand-gradient text-white px-8 py-3 rounded-full font-bold bloom-effect hover:scale-110 active:scale-95 transition-all">
              Bắt đầu miễn phí
            </button>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-3xl flex flex-col justify-center items-center text-center">
              <span className="shimmer-text text-4xl font-black mb-2">1B+</span>
              <p className="text-on-surface-variant font-medium">Chỉnh sửa sáng tạo</p>
            </div>
            <div className="glass-card p-8 rounded-3xl flex flex-col justify-center items-center text-center">
              <span className="shimmer-text text-4xl font-black mb-2">1M+</span>
              <p className="text-on-surface-variant font-medium">Mô hình AI được tạo hàng ngày</p>
            </div>
            <div className="glass-card p-8 rounded-3xl flex flex-col justify-center items-center text-center">
              <span className="shimmer-text text-4xl font-black mb-2">2.5B+</span>
              <p className="text-on-surface-variant font-medium">Lượt tải ứng dụng di động</p>
            </div>
            <div className="glass-card p-8 rounded-3xl flex flex-col justify-center items-center text-center">
              <span className="shimmer-text text-4xl font-black mb-2">300M+</span>
              <p className="text-on-surface-variant font-medium">Hình ảnh, mẫu và hơn thế nữa</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Lời yêu thích từ nhà sáng tạo</h2>
        </div>

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="absolute -top-10 -left-10 text-primary opacity-20"><Quote className="w-20 h-20 fill-current rotate-180" /></div>
          
          <div className="glass-card p-8 rounded-2xl border border-primary/10 hover:border-primary/40 transition-colors">
            <p className="text-on-surface-variant text-sm italic mb-6 leading-relaxed">
              "Tính năng hướng dẫn pose real-time ốp khung xương trực tiếp lên màn hình thực sự là một bước đột phá. Chỉ cần gõ từ khóa như 'cafe' hay 'travel', app sẽ gợi ý hàng loạt dáng chuẩn."
            </p>
            <p className="font-bold text-white text-sm">Khuê Nguyễn</p>
          </div>
          <div className="glass-card p-8 rounded-2xl border border-primary/10 hover:border-primary/40 transition-colors">
            <p className="text-on-surface-variant text-sm italic mb-6 leading-relaxed">
              "Khả năng tự động phát hiện lỗi thẩm mỹ trước khi chụp (như tóc rối, trang phục lỗi hay background dính người) giúp tôi tiết kiệm vô khối thời gian. Nó cực kỳ đáng tin cậy!"
            </p>
            <p className="font-bold text-white text-sm">Vy Nguyễn</p>
          </div>
          <div className="glass-card p-8 rounded-2xl border border-primary/10 hover:border-primary/40 transition-colors">
            <p className="text-on-surface-variant text-sm italic mb-6 leading-relaxed">
              "Giao diện thân thiện và app tự động ghi nhớ lịch sử chụp và cá nhân hóa các gợi ý pose theo đúng gu của tôi. Tôi đã chụp mọi bức ảnh du lịch bằng nó!"
            </p>
            <p className="font-bold text-white text-sm">Bình Phạm</p>
          </div>

          <div className="absolute -bottom-10 -right-10 text-primary opacity-20"><Quote className="w-20 h-20 fill-current" /></div>
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
        <h1 className="text-4xl md:text-7xl font-black mb-10 tracking-tight shimmer-text uppercase py-4 leading-[1.2]">Chụp ảnh đẹp ngay từ lần đầu</h1>
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
          <div className="flex items-center gap-3 bg-[#2e1052]/30 border border-[#4a1d8a]/50 rounded-xl px-4 py-3 mb-8">
            <Cloud className="w-5 h-5 text-secondary" />
            <span className="text-white font-bold text-sm tracking-tight text-secondary">Dung lượng 500MB</span>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            {[
              "Gợi ý pose tự nhiên cơ bản",
              "AI detector cơ bản (độ chính xác thấp)",
              "Không nhận diện background, vóc dáng",
              "Pose tĩnh, không cá nhân hóa",
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
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 mb-8">
              <Cloud className="w-5 h-5 text-secondary" />
              <span className="text-white font-bold text-sm tracking-tight">Dung lượng 50GB</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "Toàn bộ Monthly Features",
                "AI phân tích chuyên sâu realtime",
                "Pose nâng cao + Creator Pose độc quyền",
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
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 mb-8">
            <Cloud className="w-5 h-5 text-primary" />
            <span className="text-white font-bold text-sm tracking-tight text-primary">Dung lượng 5GB</span>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            {[
              "AI nhận diện background realtime",
              "AI phân tích vóc dáng, áo quần",
              "Gợi ý pose phù hợp cá nhân",
              "AI detector cao cấp (độ chính xác cao)",
              "Toàn bộ thư viện (100+ pose)",
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
              { f: "Giá", p1: "0 VNĐ", p2: "19.000 VNĐ", p3: "99.000 VNĐ" },
              { f: "Chi phí mỗi ngày", p1: "-", p2: "~600 VNĐ", p3: "~300 VNĐ" },
              { f: "Bố cục ảnh gợi ý", p1: "Cơ bản (5)", p2: "Nâng cao (100+)", p3: "Tất cả + Custom" },
              { f: "Hướng dẫn tạo dáng", p1: "✓", p2: "✓✓", p3: "✓✓✓ (Creator)" },
              { f: "Phát hiện lỗi (Real-time)", p1: "Đơn giản", p2: "Nâng cao", p3: "Pro Analysis" },
              { f: "Gợi ý góc chụp & ánh sáng", p1: "-", p2: "✓", p3: "✓" },
              { f: "Bắt chước ảnh mẫu (Ghost Pose)", p1: "-", p2: "✓", p3: "✓" },
              { f: "Độ phân giải", p1: "Standard", p2: "HD", p3: "Ultra HD / ProRAW" },
              { f: "Watermark & quảng cáo", p1: "Có", p2: "-", p3: "-" },
              { f: "Lưu trữ Cloud", p1: "500 MB", p2: "5 GB", p3: "50 GB" },
              { f: "Trải nghiệm tính năng mới", p1: "-", p2: "Bình thường", p3: "Ưu tiên hàng đầu" }
            ].map((row, i) => (
              <tr key={i} className="hover:bg-white/5 transition-colors">
                <td className="py-5 px-4 font-bold text-sm uppercase">{row.f}</td>
                <td className="py-5 px-4 text-center text-on-surface-variant text-sm">{row.p1}</td>
                <td className="py-5 px-4 text-center text-on-surface-variant text-sm">{row.p2}</td>
                <td className={`py-5 px-4 text-center text-sm ${row.f === 'Giá' ? 'font-black text-secondary' : 'font-black'}`}>{row.p3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </motion.div>
  );
};

const BusinessPage = ({ setPage }: SharedProps) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
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
            <h2 className="text-5xl md:text-6xl font-black mb-12 uppercase leading-[1.2] tracking-tighter shimmer-text py-2">GIÁ TRỊ CHO <br />ĐỐI TÁC</h2>
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
            className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tight leading-[1.2] py-2"
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
           className="relative group aspect-video max-w-[1000px] mx-auto rounded-[2.5rem] overflow-hidden border border-white/20 shadow-2xl block bg-black"
         >
           {!isPlaying ? (
             <>
               {/* Video Placeholder Image */}
               <img 
                 src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200" 
                 alt="App Demo and TVC Background" 
                 className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-[2s]"
               />
               
               {/* Play Button Overlay */}
               <div className="absolute inset-0 flex items-center justify-center">
                 <button 
                   onClick={() => setIsPlaying(true)}
                   className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center group/btn relative overflow-hidden shadow-2xl transition-transform hover:scale-110 active:scale-95"
                 >
                   <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover/btn:opacity-20 transition-opacity"></div>
                   <Play className="w-10 h-10 text-white fill-white ml-1 transition-transform group-hover/btn:scale-110" />
                 </button>
               </div>
 
               {/* Glowing accents */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
               <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                 <div className="space-y-2">
                   <p className="text-white/40 font-black uppercase text-[10px] tracking-widest">Featured Story</p>
                   <h3 className="text-2xl font-bold text-white uppercase tracking-tight leading-tight py-1">The Future of Retail Photography</h3>
                 </div>
                 <div className="text-right">
                   <p className="text-white font-black text-sm uppercase tracking-tighter">02:45</p>
                   <p className="text-white/40 text-[10px] uppercase font-bold">4K Cinema Experience</p>
                 </div>
               </div>
             </>
           ) : (
            <div className="w-full h-full relative bg-black">
               <iframe 
                 src="https://drive.google.com/file/d/1rF08C7I4Pywa5VfGp9kVc4owyAYiHr8g/preview" 
                 className="w-full h-full border-none"
                 allow="autoplay"
                 allowFullScreen
               ></iframe>
               <button 
                 onClick={() => setIsPlaying(false)}
                 className="absolute top-6 right-6 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors z-10"
               >
                 <X className="w-6 h-6" />
               </button>
             </div>
           )}
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

      <DownloadSection />
      <Footer />
    </div>
  );
}
