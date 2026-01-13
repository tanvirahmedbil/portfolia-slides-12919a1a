import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

// Import growth images
import googleAdsItinConv from "@/assets/growth/google-ads-itin-conv.png";
import googleAdsClicksConv from "@/assets/growth/google-ads-clicks-conv.png";
import auctionInsights from "@/assets/growth/auction-insights.png";
import googleAdsCampaigns from "@/assets/growth/google-ads-campaigns.png";
import ga4Watermanbd from "@/assets/growth/ga4-watermanbd.png";
import organicTraffic90days from "@/assets/growth/organic-traffic-90days.png";
import organicSearchGrowth from "@/assets/growth/organic-search-growth.png";
interface GrowthSnapshot {
  id: number;
  image: string;
  caption: string;
  tags: string[];
  alt: string;
}
const growthSnapshots: GrowthSnapshot[] = [{
  id: 1,
  image: googleAdsItinConv,
  caption: "Conversion performance – Google Ads",
  tags: ["PPC", "E-commerce"],
  alt: "Google Ads dashboard showing 21.2K clicks, $31.7K cost, 1.97K conversions with $16.07 cost per conversion"
}, {
  id: 2,
  image: googleAdsClicksConv,
  caption: "Low CPC campaign growth – Google Ads",
  tags: ["PPC", "Lead Gen"],
  alt: "Google Ads overview showing 57.1K clicks, 2.99K conversions at $0.06 average CPC"
}, {
  id: 3,
  image: auctionInsights,
  caption: "Auction insights – Competitive positioning",
  tags: ["PPC", "Local SEO"],
  alt: "Google Ads auction insights showing leading impression share and top of page rate"
}, {
  id: 4,
  image: googleAdsCampaigns,
  caption: "Campaign scaling – Google Ads",
  tags: ["PPC", "E-commerce"],
  alt: "Google Ads campaigns showing 46.4K clicks and 3.73K conversions at $0.60 cost per conversion"
}, {
  id: 5,
  image: ga4Watermanbd,
  caption: "Organic traffic growth – Google Analytics",
  tags: ["SEO", "B2B"],
  alt: "Google Analytics 4 showing traffic acquisition growth with sessions over time"
}, {
  id: 6,
  image: organicTraffic90days,
  caption: "Steady organic growth – 90-day trend",
  tags: ["SEO", "E-commerce"],
  alt: "Organic traffic analysis showing consistent 7,000+ daily sessions"
}, {
  id: 7,
  image: organicSearchGrowth,
  caption: "Organic search spike – Long-term SEO",
  tags: ["SEO", "E-commerce"],
  alt: "Google Analytics showing organic search growth from under 20K to over 40K sessions"
}];
const GrowthSection = () => {
  const [selectedImage, setSelectedImage] = useState<GrowthSnapshot | null>(null);
  return <section id="growth" className="section-slide">
      <div className="section-content">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Growth Glimpse
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Selected performance snapshots from real client accounts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {growthSnapshots.map(snapshot => <Dialog key={snapshot.id}>
              <DialogTrigger asChild>
                <article className="group relative bg-card rounded-xl border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 motion-reduce:transition-none" onClick={() => setSelectedImage(snapshot)}>
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img src={snapshot.image} alt={snapshot.alt} className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100" loading="lazy" />
                  </div>
                  
                  <div className="p-4">
                    
                    <div className="flex flex-wrap gap-2">
                      {snapshot.tags.map(tag => <Badge key={tag} variant="secondary" className="text-xs bg-muted text-muted-foreground">
                          {tag}
                        </Badge>)}
                    </div>
                  </div>
                </article>
              </DialogTrigger>
              
              <DialogContent className="max-w-5xl w-[95vw] p-0 bg-background border-border">
                <div className="relative">
                  <img src={snapshot.image} alt={snapshot.alt} className="w-full h-auto rounded-t-lg" />
                  <div className="p-4 md:p-6">
                    <p className="text-base md:text-lg font-medium text-foreground mb-3">
                      {snapshot.caption}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {snapshot.tags.map(tag => <Badge key={tag} variant="secondary" className="text-xs bg-muted text-muted-foreground">
                          {tag}
                        </Badge>)}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>)}
        </div>
      </div>
    </section>;
};
export default GrowthSection;