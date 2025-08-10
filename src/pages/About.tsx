import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <section className="h-[60vh] overflow-hidden">
        <img
          src={aboutImage}
          alt="Our sustainable mission"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-display font-medium mb-6">Our Story</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a simple belief: fashion should be timeless, not trendy. 
              Sustainable, not wasteful. Inclusive, not exclusive.
            </p>
          </div>

          <div className="prose prose-lg mx-auto text-muted-foreground space-y-8">
            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">Sustainable Materials</h2>
              <p className="leading-relaxed">
                Every fabric we choose tells a story of responsibility. Our organic cotton is GOTS-certified, 
                ensuring it's grown without harmful pesticides and processed without toxic chemicals. 
                Our recycled materials give new life to what would otherwise be waste, 
                creating beautiful pieces while reducing our environmental footprint.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">Ethical Production</h2>
              <p className="leading-relaxed">
                We partner with certified Fair Trade manufacturers who share our commitment to 
                worker rights and fair wages. Every piece is made in facilities that meet our 
                strict standards for working conditions, ensuring that the people who make our 
                clothes are treated with the respect and dignity they deserve.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">Timeless Design</h2>
              <p className="leading-relaxed">
                Our designs are intentionally simple, focusing on quality construction and 
                classic silhouettes that won't go out of style. We believe in creating pieces 
                that become wardrobe staples, not temporary trends. Each garment is designed 
                to be worn, loved, and kept for years to come.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">Gender-Neutral Fashion</h2>
              <p className="leading-relaxed">
                Fashion has no gender. Our pieces are designed to be worn by anyone, regardless 
                of how they identify. We create clothing that focuses on fit, comfort, and style, 
                allowing our customers to express themselves authentically through what they wear.
              </p>
            </div>

            <div className="text-center pt-8">
              <p className="text-lg font-medium text-foreground">
                Join us in building a more sustainable future, one garment at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;