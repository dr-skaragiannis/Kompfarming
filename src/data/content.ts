import { img } from "../assets/images";

export type Lang = "el" | "en";

export interface Article {
  slug: string;
  tag: Record<Lang, string>;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  image: string;
  author?: Record<Lang, string>;
  body: Record<Lang, { type: "p" | "h3" | "ul"; text?: string; items?: string[] }[]>;
}

export const contact = {
  name: { el: "Κώστας Μπρέλλας", en: "Kostas Brellas" },
  village: { el: "Άγιος Κωνσταντίνος", en: "Agios Konstantinos" },
  town: { el: "Φάρσαλα, 40300", en: "Farsala, 40300" },
  region: { el: "Θεσσαλία, Ελλάδα", en: "Thessaly, Greece" },
  phone: "+30 6977 594 071",
  phoneHref: "tel:+306977594071",
  email: "kos.brellas@gmail.com",
  facebook:
    "https://www.facebook.com/pages/Kompfarming-%CE%9A%CE%B1%CF%81%CF%80%CE%BF%CE%AF-%CE%93%CE%AE%CF%82/361130017379958",
  youtube: "https://www.youtube.com/channel/UCxhszoUanLRcnHObij9w_Bw",
  linkedin: "https://www.linkedin.com/in/kostas-brellas-195a1b112/",
};

export const ui = {
  nav: {
    products: { el: "Προϊόντα", en: "Products" },
    services: { el: "Υπηρεσίες", en: "Services" },
    knowledge: { el: "Γνώση", en: "Knowledge" },
    about: { el: "Σχετικά", en: "About" },
    contact: { el: "Επικοινωνία", en: "Contact" },
    cta: { el: "Ζητήστε προσφορά", en: "Request a quote" },
  },
  hero: {
    eyebrow: { el: "Άγιος Κωνσταντίνος Φαρσάλων · από το 2011", en: "Agios Konstantinos, Farsala · since 2011" },
    title: {
      el: "Καθαρός σπόρος από τον κάμπο των Φαρσάλων.",
      en: "Clean seed from the plain of Farsala.",
    },
    sub: {
      el: "Σιτάρι, Φακές Φαρσάλων, Βίκος, Ρεβίθια, Κριθάρι και Βρώμη. Καλλιέργεια, θεριζοαλωνισμός και πώληση προϊόντων — με τα πιο σύγχρονα μέσα και προσπάθεια για την καλύτερη ποιότητα.",
      en: "Wheat, Farsala lentils, vetch, chickpeas, barley and oats. Cultivation, combine harvesting and product sales — with modern machinery and a constant effort for the highest quality.",
    },
    primary: { el: "Δείτε τα προϊόντα", en: "See our products" },
    secondary: { el: "Θεριζοαλωνιστικές εργασίες", en: "Harvesting services" },
    caption: { el: "Θερισμένα χωράφια στον κάμπο των Φαρσάλων", en: "Harvested fields on the Farsala plain" },
  },
  marquee: {
    el: ["Σιτάρι", "Φακές Φαρσάλων", "Βίκος", "Ρεβίθια", "Κριθάρι", "Βρώμη", "Τριφύλλι", "Ελαιοκράμβη"],
    en: ["Wheat", "Farsala Lentils", "Vetch", "Chickpeas", "Barley", "Oats", "Clover", "Rapeseed"],
  },
  products: {
    eyebrow: { el: "Προϊόντα", en: "Products" },
    title: { el: "Πώληση προϊόντων & σπόρου", en: "Product & seed sales" },
    sub: {
      el: "Καθαρός σπόρος από ξερικά χωράφια της Θεσσαλίας, με αμειψισπορά σιταριού και ψυχανθών. Προσπάθεια για την καλύτερη ποιότητα, κάθε χρονιά.",
      en: "Clean seed from the dry-farmed fields of Thessaly, grown in rotation between cereals and legumes. Striving for the best quality, every season.",
    },
    items: [
      {
        name: { el: "Φακές Φαρσάλων", en: "Farsala Lentils" },
        desc: {
          el: "Οι ψιλές φακές των Φαρσάλων: βράζουν εύκολα, είναι ιδιαίτερα νόστιμες και αποτελούν το σήμα κατατεθέν της περιοχής.",
          en: "The fine Farsala lentil: quick to cook, exceptionally flavourful and the signature crop of the region.",
        },
        latin: "Lens culinaris",
      },
      {
        name: { el: "Σιτάρι", en: "Wheat" },
        desc: {
          el: "Σκληρό και μαλακό σιτάρι από ξερικές καλλιέργειες, σε εναλλαγή με φακή που λειτουργεί ως φυσικό λίπασμα.",
          en: "Durum and soft wheat from dry-land cultivation, rotated with lentils that act as natural fertiliser for the soil.",
        },
        latin: "Triticum",
      },
      {
        name: { el: "Βίκος", en: "Vetch" },
        desc: {
          el: "Κτηνοτροφικό ψυχανθές για καρπό και σανό. Αφήνει τον αγρό καθαρό από ζιζάνια για την επόμενη καλλιέργεια.",
          en: "A forage legume grown for grain and hay. Leaves the field free of weeds for the following crop.",
        },
        latin: "Vicia sativa",
      },
      {
        name: { el: "Ρεβίθια", en: "Chickpeas" },
        desc: {
          el: "Μικρόσπερμα, λεπτόφλουδα ρεβίθια — ιδανικά για σαλάτες, σούπες και τη μεσογειακή κουζίνα.",
          en: "Small-seeded, thin-skinned chickpeas — ideal for salads, soups and Mediterranean cooking.",
        },
        latin: "Cicer arietinum",
      },
      {
        name: { el: "Κριθάρι", en: "Barley" },
        desc: {
          el: "Κτηνοτροφικό κριθάρι, το καταλληλότερο φυτό στήριξης για πρώιμες ποικιλίες βίκου στη συγκαλλιέργεια.",
          en: "Feed barley — also the ideal support crop for early vetch varieties in mixed sowing.",
        },
        latin: "Hordeum vulgare",
      },
      {
        name: { el: "Βρώμη", en: "Oats" },
        desc: {
          el: "Βρώμη για καρπό και σανό, προτιμώμενο φυτό συγκαλλιέργειας για όψιμες ποικιλίες βίκου.",
          en: "Oats for grain and hay, the preferred companion crop for late vetch varieties.",
        },
        latin: "Avena sativa",
      },
    ],
  },
  services: {
    eyebrow: { el: "Υπηρεσίες", en: "Services" },
    title: { el: "Από το όργωμα μέχρι τον αλωνισμό", en: "From ploughing to threshing" },
    sub: {
      el: "Αναλαμβάνουμε ολόκληρο τον κύκλο της καλλιέργειας ή μεμονωμένες εργασίες, με σύγχρονο εξοπλισμό Fendt και Amazone.",
      en: "We take on the full cultivation cycle or individual operations, with modern Fendt and Amazone equipment.",
    },
    items: [
      {
        num: "01",
        title: { el: "Θεριζοαλωνιστικές εργασίες", en: "Harvesting & combine operations" },
        desc: {
          el: "Σιτάρι, κριθάρι, κόψιμο βίκου, αλωνισμός φακής, αλωνισμός ρεβιθιών, αλωνισμός τριφυλλιού και μικρών σπόρων. Προσπαθούμε πάντα για την καλύτερη ποιότητα αλωνισμού, με τα πιο σύγχρονα μέσα συγκομιδής.",
          en: "Wheat, barley, vetch cutting, lentil threshing, chickpea threshing, clover and small-seed threshing. We always aim for the best threshing quality with the most modern harvesting equipment.",
        },
        list: {
          el: ["Σιτάρι & κριθάρι", "Κόψιμο βίκου", "Αλωνισμός φακής", "Αλωνισμός ρεβιθιών", "Τριφύλλι / μικροί σπόροι"],
          en: ["Wheat & barley", "Vetch cutting", "Lentil threshing", "Chickpea threshing", "Clover / small seeds"],
        },
        image: img.harvester,
      },
      {
        num: "02",
        title: { el: "Ανάληψη κύκλου καλλιέργειας", en: "Full cultivation cycle" },
        desc: {
          el: "Αναλαμβάνουμε όργωμα, σπορά, ψεκασμό και λίπανση καλλιεργειών δημητριακών, οσπρίων και κτηνοτροφικών σπόρων.",
          en: "We provide ploughing, sowing, spraying and fertilisation for cereals, pulses and forage crops.",
        },
        list: {
          el: ["Δημητριακά", "Όσπρια", "Κτηνοτροφικοί σπόροι", "Βίκος & τριφύλλι", "Γρασίδι · Ρεβίθια · Ελαιοκράμβη"],
          en: ["Cereals", "Pulses", "Fodder seed", "Vetch & clover", "Grass · Chickpeas · Rapeseed"],
        },
        image: img.vetch,
      },
      {
        num: "03",
        title: { el: "Πώληση σπόρου", en: "Seed sales" },
        desc: {
          el: "Καθαρός σπόρος σιταριού, φακής, βίκου, ρεβιθιών, κριθαριού και βρώμης, απευθείας από τον παραγωγό.",
          en: "Clean wheat, lentil, vetch, chickpea, barley and oat seed, direct from the grower.",
        },
        list: {
          el: ["Σιτάρι", "Φακές Φαρσάλων", "Βίκος", "Ρεβίθια", "Κριθάρι & βρώμη"],
          en: ["Wheat", "Farsala lentils", "Vetch", "Chickpeas", "Barley & oats"],
        },
        image: img.lentils,
      },
    ],
  },
  tech: {
    eyebrow: { el: "Τεχνολογία", en: "Technology" },
    title: { el: "Σύγχρονα μέσα συγκομιδής", en: "Modern harvesting equipment" },
    sub: {
      el: "Με πάθος και αγάπη για τη Γη και τη Φύση — και με μηχανήματα που επιτρέπουν καθαρό, ομοιόμορφο αλωνισμό ακόμη και σε ευαίσθητες καλλιέργειες όπως η φακή και το τριφύλλι.",
      en: "With passion and love for the Earth and Nature — and with machinery that allows clean, uniform threshing even in delicate crops such as lentils and clover.",
    },
    stats: [
      { value: "19+", label: { el: "χρόνια χειριστής θεριζοαλωνιστικής", en: "years as a combine operator" } },
      { value: "2011", label: { el: "έτος ίδρυσης KOMP Farming", en: "KOMP Farming founded" } },
      { value: "6", label: { el: "βασικές καλλιέργειες", en: "core crops" } },
      { value: "Fendt · Amazone", label: { el: "εξοπλισμός", en: "equipment" } },
    ],
  },
  about: {
    eyebrow: { el: "Ο άνθρωπος πίσω από το KOMP Farming", en: "The person behind KOMP Farming" },
    title: { el: "Κώστας Μπρέλλας", en: "Kostas Brellas" },
    p1: {
      el: "Ο Κώστας Μπρέλλας διευθύνει το KOMP Farming από τον Φεβρουάριο του 2011, στον Άγιο Κωνσταντίνο Φαρσάλων. Με περισσότερα από 19 χρόνια εμπειρίας ως χειριστής θεριζοαλωνιστικής και τριετή θητεία ως χειριστής σιδηροδρομικών μηχανημάτων Plasser & Theurer στην ΤΕΡΝΑ Α.Ε., φέρνει στον κάμπο την ακρίβεια και τη μεθοδικότητα του τεχνικού.",
      en: "Kostas Brellas has managed KOMP Farming since February 2011 in Agios Konstantinos, Farsala. With more than 19 years of experience as a combine operator and three years operating Plasser & Theurer railway machinery at TERNA S.A., he brings an engineer's precision and discipline to the field.",
    },
    p2: {
      el: "Απόφοιτος του ΤΕΙ Θεσσαλίας, είναι πρόεδρος του Αγροτικού Συνεταιρισμού Δημητριακών & Οσπρίων Αγίου Κωνσταντίνου Φαρσάλων και συμμετέχει ενεργά στις πρωτοβουλίες της Περιφέρειας Θεσσαλίας για την προώθηση και ανάδειξη των θεσσαλικών οσπρίων.",
      en: "A graduate of the Technological Educational Institute of Thessaly, he is president of the Agricultural Cooperative of Cereals & Pulses of Agios Konstantinos, Farsala, and takes an active part in the Region of Thessaly's initiatives to promote Thessalian pulses.",
    },
    quote: {
      el: "«Εδώ στα Φάρσαλα τα περισσότερα χωράφια είναι ξερικά, οπότε εναλλάσσουμε τη καλλιέργεια σιταριού με φακή — λειτουργεί ως λίπασμα για το έδαφος και μας δίνει ποιοτικότερα προϊόντα.»",
      en: "“Here in Farsala most fields are dry-farmed, so we rotate wheat with lentils — it acts as fertiliser for the soil and gives us better-quality produce.”",
    },
    facts: [
      { k: { el: "Ρόλος", en: "Role" }, v: { el: "Ιδρυτής & Διευθυντής, KOMP Farming", en: "Founder & Manager, KOMP Farming" } },
      { k: { el: "Έδρα", en: "Base" }, v: { el: "Άγιος Κωνσταντίνος, Φάρσαλα", en: "Agios Konstantinos, Farsala" } },
      { k: { el: "Σπουδές", en: "Education" }, v: { el: "ΤΕΙ Θεσσαλίας", en: "TEI of Thessaly" } },
      { k: { el: "Συνεταιρισμός", en: "Cooperative" }, v: { el: "Πρόεδρος Α.Σ. Δημητριακών & Οσπρίων Αγ. Κωνσταντίνου", en: "President, Cereals & Pulses Coop of Ag. Konstantinos" } },
      { k: { el: "Προηγούμενα", en: "Previously" }, v: { el: "Χειριστής, ΤΕΡΝΑ Α.Ε. (2008–2011)", en: "Operator, TERNA S.A. (2008–2011)" } },
    ],
  },
  knowledge: {
    eyebrow: { el: "Γνώση", en: "Knowledge" },
    title: { el: "Πληροφορίες από το χωράφι", en: "Notes from the field" },
    sub: {
      el: "Άρθρα για τα όσπρια και τη διατροφή, την καλλιέργεια του βίκου και τη μείωση του κόστους παραγωγής των σιτηρών.",
      en: "Articles on pulses and nutrition, growing vetch, and reducing the production cost of cereals.",
    },
    read: { el: "Διαβάστε", en: "Read" },
    back: { el: "Πίσω στη Γνώση", en: "Back to Knowledge" },
    more: { el: "Περισσότερα άρθρα", en: "More articles" },
  },
  contactSection: {
    eyebrow: { el: "Επικοινωνία", en: "Contact" },
    title: { el: "Για οποιαδήποτε πληροφορία, επικοινωνήστε μαζί μας.", en: "For any information, get in touch." },
    sub: {
      el: "Προσφορές για θεριζοαλωνισμό, ανάληψη καλλιέργειας ή αγορά σπόρου — καλέστε μας ή στείλτε μήνυμα.",
      en: "Quotes for harvesting, cultivation contracts or seed purchases — call us or send a message.",
    },
    form: {
      name: { el: "Ονοματεπώνυμο", en: "Full name" },
      phone: { el: "Τηλέφωνο", en: "Phone" },
      topic: { el: "Θέμα", en: "Topic" },
      topics: {
        el: ["Θεριζοαλωνισμός", "Ανάληψη καλλιέργειας", "Αγορά σπόρου / προϊόντων", "Άλλο"],
        en: ["Harvesting", "Cultivation contract", "Seed / product purchase", "Other"],
      },
      message: { el: "Μήνυμα", en: "Message" },
      send: { el: "Αποστολή", en: "Send" },
      sent: { el: "Ευχαριστούμε! Θα επικοινωνήσουμε σύντομα.", en: "Thank you! We'll be in touch shortly." },
    },
    labels: {
      address: { el: "Διεύθυνση", en: "Address" },
      phone: { el: "Τηλέφωνο", en: "Phone" },
      email: { el: "Email", en: "Email" },
      social: { el: "Κοινωνικά δίκτυα", en: "Social" },
    },
  },
  home: {
    pillarsEyebrow: { el: "Τι κάνουμε", en: "What we do" },
    pillarsTitle: { el: "Καλλιεργούμε, θερίζουμε, μοιραζόμαστε.", en: "We grow, we harvest, we share." },
    pillars: [
      {
        title: { el: "Προϊόντα", en: "Products" },
        desc: {
          el: "Φακές Φαρσάλων, σιτάρι, βίκος, ρεβίθια, κριθάρι και βρώμη — καθαρός σπόρος απευθείας από τον παραγωγό.",
          en: "Farsala lentils, wheat, vetch, chickpeas, barley and oats — clean seed direct from the grower.",
        },
        page: "products",
        image: img.lentils,
      },
      {
        title: { el: "Υπηρεσίες", en: "Services" },
        desc: {
          el: "Θεριζοαλωνισμοί, ανάληψη κύκλου καλλιέργειας και πώληση σπόρου με εξοπλισμό Fendt & Amazone.",
          en: "Combine harvesting, full cultivation cycle and seed sales with Fendt & Amazone equipment.",
        },
        page: "services",
        image: img.harvester,
      },
      {
        title: { el: "Γνώση", en: "Knowledge" },
        desc: {
          el: "Άρθρα για τα όσπρια και τη διατροφή, την καλλιέργεια βίκου και τη μείωση κόστους στα σιτηρά.",
          en: "Articles on pulses and nutrition, growing vetch and cutting cereal production costs.",
        },
        page: "knowledge",
        image: img.vetch,
      },
    ],
    explore: { el: "Περισσότερα", en: "Explore" },
    aboutEyebrow: { el: "Σχετικά", en: "About" },
    aboutTitle: { el: "Μια οικογενειακή εκμετάλλευση στον Άγιο Κωνσταντίνο Φαρσάλων.", en: "A family farm in Agios Konstantinos, Farsala." },
    aboutText: {
      el: "Ο Κώστας Μπρέλλας διευθύνει το KOMP Farming από το 2011. Με 19+ χρόνια στο τιμόνι θεριζοαλωνιστικής και ως πρόεδρος του τοπικού συνεταιρισμού δημητριακών & οσπρίων, καλλιεργεί με αμειψισπορά σιταριού και φακής στα ξερικά χωράφια του θεσσαλικού κάμπου.",
      en: "Kostas Brellas has run KOMP Farming since 2011. With 19+ years behind the wheel of a combine and as president of the local cereals & pulses cooperative, he farms the dry plains of Thessaly in a wheat–lentil rotation.",
    },
    aboutCta: { el: "Γνωρίστε μας", en: "Meet us" },
    ctaTitle: { el: "Χρειάζεστε θεριζοαλωνισμό ή σπόρο για τη νέα σεζόν;", en: "Need harvesting or seed for the new season?" },
    ctaText: { el: "Καλέστε μας ή στείλτε μήνυμα — απαντάμε άμεσα.", en: "Call or message us — we reply quickly." },
    ctaButton: { el: "Επικοινωνήστε μαζί μας", en: "Get in touch" },
    allProducts: { el: "Όλα τα προϊόντα", en: "All products" },
    allServices: { el: "Όλες οι υπηρεσίες", en: "All services" },
  },
  pages: {
    products: {
      title: { el: "Προϊόντα", en: "Products" },
      sub: { el: "Καθαρός σπόρος και όσπρια από τον κάμπο των Φαρσάλων.", en: "Clean seed and pulses from the Farsala plain." },
      image: img.lentils,
    },
    services: {
      title: { el: "Υπηρεσίες", en: "Services" },
      sub: { el: "Από το όργωμα μέχρι τον αλωνισμό, με σύγχρονα μέσα.", en: "From ploughing to threshing, with modern equipment." },
      image: img.tractor,
    },
    about: {
      title: { el: "Σχετικά με εμάς", en: "About us" },
      sub: { el: "Ο άνθρωπος, ο τόπος και ο τρόπος που δουλεύουμε.", en: "The person, the place and the way we work." },
      image: img.village,
    },
    knowledge: {
      title: { el: "Γνώση", en: "Knowledge" },
      sub: { el: "Πληροφορίες από το χωράφι για όσπρια, βίκο και σιτηρά.", en: "Field notes on pulses, vetch and cereals." },
      image: img.heroField,
    },
    contact: {
      title: { el: "Επικοινωνία", en: "Contact" },
      sub: { el: "Άγιος Κωνσταντίνος Φαρσάλων, Θεσσαλία.", en: "Agios Konstantinos, Farsala, Thessaly." },
      image: img.village,
    },
  },
  footer: {
    tagline: { el: "Mediterranean food από τον κάμπο των Φαρσάλων.", en: "Mediterranean food from the Farsala plain." },
    tags: { el: "Θέματα", en: "Topics" },
    rights: { el: "Όλα τα δικαιώματα διατηρούνται.", en: "All rights reserved." },
  },
};

export const articles: Article[] = [
  {
    slug: "ospria-diatrofi",
    tag: { el: "Όσπρια & Διατροφή", en: "Pulses & Nutrition" },
    title: { el: "Όσπρια, τα πολύτιμα", en: "Pulses, the precious ones" },
    excerpt: {
      el: "Ίσως από τις πιο πλήρεις τροφές, με χαμηλή θερμιδική αξία — πλούσια σε πρωτεΐνες, φυτικές ίνες, βιταμίνες Β και μέταλλα.",
      en: "Perhaps the most complete of foods, low in calories and rich in protein, fibre, B vitamins and minerals.",
    },
    image: img.lentils,
    body: {
      el: [
        { type: "p", text: "Τα όσπρια είναι ίσως από τις πιο πλήρεις τροφές, και μάλιστα με χαμηλή θερμιδική αξία, κάτι που τα καθιστά ιδανικά για όσους θέλουν να ελέγξουν το βάρος τους. Το χειμώνα, μάλιστα, είναι ακόμα πιο σημαντικά καθώς καλύπτουν σε σημαντικό βαθμό και τις ανάγκες του οργανισμού μας σε νερό. Το μόνο που χρειάζονται από εμάς είναι… μεράκι στο μαγείρεμα, για να γίνουν απολαυστικά." },
        { type: "p", text: "Κατά τη διάρκεια του χειμώνα οι ανάγκες του οργανισμού μας σε ενέργεια αλλάζουν, ενώ η ενίσχυση του ανοσοποιητικού μας συστήματος είναι σημαντική για να αντιμετωπίσουμε τα κρυολογήματα, τους ιούς και τις διάφορες ασθένειες της εποχής. Με τη σωστή διατροφή μπορούμε να θωρακίσουμε τον οργανισμό μας και να καλύψουμε τις ανάγκες του σε ενέργεια, βιταμίνες και θρεπτικά συστατικά — χωρίς να ξεχνάμε τη σωστή ενυδάτωση." },
        { type: "h3", text: "Όσπρια, τα πολύτιμα" },
        { type: "p", text: "Μια σημαντική κατηγορία από σούπες που συνηθίζονται ιδιαίτερα τον χειμώνα είναι αυτές που φτιάχνονται με όσπρια. Τα όσπρια αποτελούν μια ομάδα τροφίμων υψηλής θρεπτικής αξίας: είναι πλούσια σε υδατάνθρακες, πρωτεΐνες, βιταμίνες του συμπλέγματος Β και φυτικές ίνες, ενώ παράλληλα έχουν χαμηλό γλυκαιμικό δείκτη, με αποτέλεσμα να είναι καλή επιλογή για τη ρύθμιση του σακχάρου του αίματος." },
        { type: "p", text: "Πιάτα όπως οι σούπες με φακές, ρεβίθια και φασόλια, οι γίγαντες, η φάβα και οι σαλάτες με όσπρια καλύπτουν τις ανάγκες του οργανισμού σε υγρά και ταυτόχρονα παρέχουν πληθώρα μικροθρεπτικών και μακροθρεπτικών συστατικών. Η ετοιμασία τους είναι εύκολη, γρήγορη και οικονομική." },
        { type: "h3", text: "Διατροφική αξία" },
        { type: "p", text: "Τα οφέλη για την υγεία είναι σημαντικά: ο φυσικός συνδυασμός φυτικών ινών, πρωτεϊνών και μετάλλων είναι ιδιαίτερα πολύτιμος σε χορτοφαγικές δίαιτες και σε περιόδους νηστείας. Οι διαλυτές και αδιάλυτες φυτικές ίνες βοηθούν στη σωστή λειτουργία του εντέρου, ενώ η υψηλή περιεκτικότητα φυλλικού οξέος με ταυτόχρονα χαμηλά κορεσμένα λιπαρά καθιστά τα όσπρια ισχυρά καρδιοπροστατευτικά τρόφιμα." },
        { type: "p", text: "Ενδεικτικά, ένα φλιτζάνι μαγειρεμένα όσπρια μας τροφοδοτεί με πενταπλάσια ποσότητα φυτικών ινών σε σχέση με μια φέτα ψωμί ολικής άλεσης, καλύπτοντας το 50% της συνιστώμενης ημερήσιας πρόσληψης." },
        { type: "h3", text: "Οι καλοί συνδυασμοί" },
        { type: "p", text: "Τα όσπρια περιέχουν σχεδόν όλα τα απαραίτητα αμινοξέα. Πρωτεΐνη υψηλής βιολογικής αξίας, όμοια με αυτήν του κρέατος, εξασφαλίζουμε με τους εξής συνδυασμούς:" },
        { type: "ul", items: ["Όσπρια με τυρί", "Όσπρια με δημητριακά (ρύζι, ψωμί, καλαμπόκι)", "Όσπρια με ξηρούς καρπούς"] },
        { type: "p", text: "Η βιοδιαθεσιμότητα του σιδήρου είναι χαμηλή, αλλά αυξάνεται με ταυτόχρονη κατανάλωση τροφίμων πλούσιων σε βιταμίνη C ή μηλικό οξύ:" },
        { type: "ul", items: ["Φακές με ξύδι", "Όσπρια με σαλάτα με πιπεριές και μαϊντανό", "Όσπρια με ακτινίδιο, πορτοκάλι ή φράουλες", "Ρεβίθια με λεμόνι", "Όσπρια με λευκό κρασί"] },
        { type: "p", text: "Τέλος, τα όσπρια αποτελούν σημαντικές πηγές βιταμινών Β (θειαμίνη, νιασίνη, πυριδοξίνη), που συμβάλλουν στην εύρυθμη λειτουργία του μεταβολισμού και του νευρικού συστήματος, ενώ περιέχουν σημαντικές ποσότητες ασβεστίου, σιδήρου, μαγνησίου, μαγγανίου, φωσφόρου, καλίου και χαλκού, με αμελητέο νάτριο." },
      ],
      en: [
        { type: "p", text: "Pulses are perhaps among the most complete foods, and with a low calorie value, which makes them ideal for anyone watching their weight. In winter they are even more important, since they also cover a significant part of our body's need for water. All they need from us is a little care in the kitchen to become delicious." },
        { type: "p", text: "In winter our energy needs change, and strengthening the immune system matters for facing colds and seasonal viruses. With the right diet we can protect the body and cover its needs for energy, vitamins and nutrients — without forgetting proper hydration." },
        { type: "h3", text: "Pulses, the precious ones" },
        { type: "p", text: "Soups made with pulses are a winter staple. Pulses are a food group of high nutritional value: rich in carbohydrates, protein, B-complex vitamins and fibre, with a low glycaemic index that makes them a good choice for regulating blood sugar." },
        { type: "p", text: "Dishes such as lentil, chickpea and bean soups, giant beans, fava and pulse salads cover the body's need for fluids while providing a wealth of micro- and macro-nutrients. They are easy, quick and inexpensive to prepare." },
        { type: "h3", text: "Nutritional value" },
        { type: "p", text: "The health benefits are significant: the natural combination of fibre, protein and minerals is particularly valuable in vegetarian diets and during fasting periods. Soluble and insoluble fibre supports bowel function, while high folate and low saturated fat make pulses strongly cardio-protective." },
        { type: "p", text: "One cup of cooked pulses provides five times the fibre of a slice of wholemeal bread, covering 50% of the recommended daily intake." },
        { type: "h3", text: "Good pairings" },
        { type: "p", text: "Pulses contain almost all essential amino acids. Protein of high biological value, similar to meat, is obtained with these combinations:" },
        { type: "ul", items: ["Pulses with cheese", "Pulses with cereals (rice, bread, corn)", "Pulses with nuts"] },
        { type: "p", text: "Iron bioavailability is low, but increases when eaten with foods rich in vitamin C or malic acid:" },
        { type: "ul", items: ["Lentils with vinegar", "Pulses with a salad of peppers and parsley", "Pulses with kiwi, orange or strawberries", "Chickpeas with lemon", "Pulses with white wine"] },
        { type: "p", text: "Finally, pulses are important sources of B vitamins (thiamine, niacin, pyridoxine) that support metabolism and the nervous system, and contain significant amounts of calcium, iron, magnesium, manganese, phosphorus, potassium and copper, with negligible sodium." },
      ],
    },
  },
  {
    slug: "vikos",
    tag: { el: "Καλλιέργεια", en: "Cultivation" },
    title: { el: "Βίκος: χαρακτηριστικά, συγκαλλιέργεια και συγκομιδή", en: "Vetch: characteristics, mixed sowing and harvest" },
    excerpt: {
      el: "Φυτό δροσερών κλιμάτων που αφήνει τον αγρό καθαρό από ζιζάνια. Οδηγός για σπορά, λίπανση, εχθρούς και συγκομιδή.",
      en: "A cool-climate crop that leaves the field weed-free. A guide to sowing, fertilisation, pests and harvest.",
    },
    image: img.vetch,
    body: {
      el: [
        { type: "h3", text: "Χαρακτηριστικά" },
        { type: "ul", items: [
          "Είναι φυτό δροσερών κλιμάτων. Οι μέτριες θερμοκρασίες είναι οι πιο κατάλληλες για την ανάπτυξή του.",
          "Η αντοχή στις χαμηλές θερμοκρασίες ποικίλλει. Τα αναπτυγμένα φυτά μπορεί να αντέξουν μέχρι 10 °C κάτω από το μηδέν.",
          "Ευδοκιμεί σε εδάφη βαθιά, πλούσια, μέσης σύστασης. Προσαρμόζεται καλύτερα στα καλοστραγγισμένα πηλώδη εδάφη, αν και αναπτύσσεται και σε αμμώδη εάν λιπανθούν κανονικά. Ιδιαίτερη προσοχή στην καλή στράγγιση.",
          "Στην αμειψισπορά μπορεί να καλλιεργηθεί μετά από καλαμπόκι ή σιτηρά. Πρέπει να αποφεύγεται η σπορά σε χωράφι που τον προηγούμενο χρόνο είχε βίκο ή άλλο ψυχανθές.",
          "Η καλλιέργεια του βίκου αφήνει τον αγρό ελεύθερο από ζιζάνια για την επόμενη καλλιέργεια.",
          "Λίπανση με άζωτο δεν συνιστάται παρά μόνο 2 μονάδες στα πολύ άγονα εδάφη. Χρειάζεται όμως φώσφορο 9–10 μονάδες σε όλες τις περιπτώσεις.",
          "Η σπορά στην Ελλάδα γίνεται το φθινόπωρο, εκτός των πολύ ψυχρών περιοχών.",
          "Ποσότητα σπόρου: για σανό 16–18 κιλά/στρέμμα, για καρπό 15–17 κιλά/στρέμμα. Αποστάσεις γραμμών 20–25 εκατοστά.",
        ] },
        { type: "h3", text: "Συγκαλλιέργεια βίκου – σιτηρών" },
        { type: "p", text: "Ως καταλληλότερα φυτά στήριξης θεωρούνται τα μικρά κτηνοτροφικά σιτηρά (κριθάρι και βρώμη). Για τις πρώιμες ποικιλίες βίκου προτιμάται το κριθάρι· για τις όψιμες η βρώμη." },
        { type: "p", text: "Στα γόνιμα εδάφη το ποσοστό σπόρου κριθαριού ή βρώμης στο μίγμα μπορεί να είναι 30–40% (το υπόλοιπο 60–70% βίκος). Στα φτωχά εδάφη, όπου το σιτηρό είναι ισχυρός ανταγωνιστής, το ποσοστό πρέπει να είναι χαμηλότερο (15–20%)." },
        { type: "h3", text: "Έντομα και ασθένειες" },
        { type: "ul", items: [
          "Μελίγκρα (αφίδες).",
          "Βρούχος: αποθέτει τα αυγά στους νεαρούς λοβούς την άνοιξη. Αν η καλλιέργεια προορίζεται για καρπό, ένας ψεκασμός με εγκεκριμένο εντομοκτόνο είναι αναγκαίος μόλις εμφανισθούν τα πρώτα άνθη.",
          "Φυτονόμος: κολεόπτερο που τρώει την περιφέρεια των φύλλων.",
          "Άπιο: όμοια βιολογία και ζημιές με τον φυτονόμο.",
          "Ασθένειες: Βοτρύτιδα, Ωίδιο, Σκωρίαση, Περονόσπορος.",
        ] },
        { type: "h3", text: "Συγκομιδή" },
        { type: "p", text: "Για σανό, το κατάλληλο στάδιο είναι όταν οι πράσινοι ακόμη σπόροι των περισσότερων λοβών, πιεζόμενοι ανάμεσα στον αντίχειρα και τον δείκτη, δεν σπάνε. Συγκομιδή στην έναρξη της άνθησης δίνει άριστο σανό αλλά σε μικρή ποσότητα· στην έναρξη της ωρίμανσης δίνει κακής ποιότητας σανό λόγω απωλειών φύλλων." },
        { type: "p", text: "Στις καρποδοτικές καλλιέργειες η εποχή συγκομιδής καθορίζεται από τη φυσιολογική ωρίμανση: οι περισσότεροι λοβοί παίρνουν την αχυρένια, όχι ηλιοκαμένη απόχρωση. Η κοπή γίνεται με ειδικό μαχαίρι (βικομάχαιρο) και, μετά την ξήρανση, ο αλωνισμός με αλωνιστική σίτου εφοδιασμένη με pick-up, ειδικά κόσκινα και ρυθμισμένη απόσταση τυμπάνου–αντιτυμπάνου. Τα ίδια ισχύουν και για την παραγωγή σπόρου." },
      ],
      en: [
        { type: "h3", text: "Characteristics" },
        { type: "ul", items: [
          "A cool-climate plant; moderate temperatures suit it best.",
          "Cold tolerance varies. Established plants can withstand down to –10 °C.",
          "Thrives in deep, rich soils of medium texture, best on well-drained loams; also grows on sandy soils if fertilised normally. Good drainage is essential.",
          "In rotation it can follow maize or cereals. Avoid sowing after vetch or another legume.",
          "Vetch leaves the field free of weeds for the following crop.",
          "Nitrogen is not recommended except 2 units on very poor soils. Phosphorus at 9–10 units is needed in all soils.",
          "In Greece it is sown in autumn, except in very cold areas.",
          "Seed rate: 16–18 kg/stremma for hay, 15–17 kg/stremma for grain. Row spacing 20–25 cm.",
        ] },
        { type: "h3", text: "Vetch–cereal mixed sowing" },
        { type: "p", text: "Small feed cereals (barley and oats) are the best support crops. Barley is preferred for early vetch varieties; oats for late ones." },
        { type: "p", text: "On fertile soils the cereal share in the seed mix can be 30–40% (60–70% vetch). On poor soils, where the cereal competes strongly, keep it lower (15–20%)." },
        { type: "h3", text: "Pests and diseases" },
        { type: "ul", items: [
          "Aphids.",
          "Bruchid weevil: lays eggs in young pods in spring. For grain crops, one spray with an approved insecticide is needed at first flowering.",
          "Sitona weevil: a beetle that eats the leaf margins.",
          "Apion weevil: similar biology and damage.",
          "Diseases: Botrytis, powdery mildew, rust, downy mildew.",
        ] },
        { type: "h3", text: "Harvest" },
        { type: "p", text: "For hay, the right stage is when the still-green seeds of most pods do not break when pressed between thumb and forefinger. Cutting at early flowering gives excellent but scarce hay; cutting at early ripening gives poor hay due to leaf loss." },
        { type: "p", text: "For grain, harvest timing follows physiological maturity: most pods turn straw-coloured but not sun-scorched. Cutting is done with a special vetch knife and, after drying, threshing with a cereal combine fitted with a pick-up, special sieves and an adjusted drum–concave clearance. The same applies to seed production." },
      ],
    },
  },
  {
    slug: "meiosi-kostous",
    tag: { el: "Σιτηρά", en: "Cereals" },
    title: { el: "Μέτρα για τη μείωση του κόστους παραγωγής των σιτηρών", en: "Measures to reduce the production cost of cereals" },
    excerpt: {
      el: "Πιστοποιημένος σπόρος, σωστή ποικιλία, εποχή και βάθος σποράς, κυλίνδρισμα, ζιζάνια και λίπανση — τα βασικά για πετυχημένη καλλιέργεια.",
      en: "Certified seed, the right variety, sowing time and depth, rolling, weeds and fertilisation — the essentials of a successful crop.",
    },
    image: img.heroField,
    author: { el: "Αντώνης Πογιατζής · Λειτουργός Γεωργίας, Τμήμα Γεωργίας", en: "Antonis Pogiatzis · Agricultural Officer, Department of Agriculture" },
    body: {
      el: [
        { type: "p", text: "Είναι γνωστό σε όλους μας και, κυρίως, στους γεωργούς ότι μια καλή παραγωγή σιτηρών εξαρτάται σε μεγάλο βαθμό από το ύψος και την κατανομή της βροχόπτωσης. Όμως, έχει αποδειχτεί στην πράξη ότι και πολλοί άλλοι παράγοντες διαδραματίζουν σημαντικό ρόλο στην πετυχημένη καλλιέργεια με ταυτόχρονη μείωση του κόστους παραγωγής." },
        { type: "h3", text: "Ποικιλία και χωράφι" },
        { type: "p", text: "Η επιτυχία βασίζεται στη χρήση πιστοποιημένου σπόρου, στην επιλογή της κατάλληλης ποικιλίας κριθαριού ή σιταριού και του κατάλληλου χωραφιού, στην εποχή και το βάθος σποράς, στην ποσότητα του σπόρου, στην προετοιμασία και λίπανση του εδάφους, στον τύπο του σπορέα και στο κυλίνδρισμα, και φυσικά στην καταπολέμηση των ζιζανίων. Καλύτερα εδάφη για το σιτάρι είναι τα βαθιά αμμοαργιλλώδη, πηλώδη και αργιλλώδη. Το κριθάρι προτιμά εδάφη ημιγόνιμα, αντέχει περισσότερο στις υψηλές θερμοκρασίες αλλά είναι ευαίσθητο στις χαμηλές." },
        { type: "h3", text: "Πιστοποιημένος σπόρος" },
        { type: "p", text: "Ο πιστοποιημένος σπόρος αυξάνει την παραγωγή: έχει μεγάλη βλαστική ικανότητα, ψηλή γενετική καθαρότητα, ομοιόμορφο μέγεθος και είναι απαλλαγμένος από σπόρους ζιζανίων. Επιπλέον, είναι καλυμμένος με ουσίες που προστατεύουν τόσο τον σπόρο όσο και τα νεαρά φυτά στα πρώτα στάδια ανάπτυξης." },
        { type: "h3", text: "Σπορά" },
        { type: "p", text: "Η σπορά πρέπει να γίνεται σε καλά ισοπεδωμένο, ψιλοχωματισμένο χωράφι για καλή επαφή σπόρου–εδάφους. Η καλαμιά δεν πρέπει να καίγεται αλλά να ενσωματώνεται στο έδαφος. Καλύτερη περίοδος σποράς: αρχές έως τέλος Νοεμβρίου για το κριθάρι, μέσα έως τέλος Νοεμβρίου για το σιτάρι. Με σύγχρονα μηχανήματα σποράς η κανονική ποσότητα σπόρου είναι 10–15 κιλά το δεκάριο και το βάθος 2,5–6 εκατοστά. Οι γραμμικοί σπορείς δίνουν ομοιόμορφη κατανομή και ακριβή έλεγχο βάθους, με πυκνές γραμμές 11–12 εκατοστών." },
        { type: "h3", text: "Κυλίνδρισμα" },
        { type: "p", text: "Βασική εργασία όταν η διαθέσιμη υγρασία εδάφους είναι ο σπουδαιότερος παράγοντας. Γίνεται μετά τη σπορά και πριν το φύτρωμα, όταν το έδαφος είναι στον ρώγο του. Ο διπλός οδοντωτός κύλινδρος θρυμματίζει τους σβώλους, προστατεύει από τη διάβρωση και δεν σχηματίζει κρούστα. Ταχύτητα περίπου 80 μέτρα το λεπτό." },
        { type: "h3", text: "Ζιζάνια" },
        { type: "ul", items: [
          "Αμειψισπορά με ψυχανθή και ψεκασμός των ζιζανίων κατά τη βλαστική περίοδο με ειδικό ζιζανιοκτόνο.",
          "Καταστροφή του βρώμου στα όρια των χωραφιών με ζιζανιοκτόνο επαφής.",
          "Επαναφορά της αγρανάπαυσης και καταστροφή της βλάστησης του βρώμου με βαθιά καλλιέργεια.",
          "Κόψιμο των σιτηρών για σανό αμέσως μετά το ξεστάχυασμα και πάντοτε πριν την ωρίμανση του σπόρου του βρώμου.",
        ] },
        { type: "h3", text: "Λίπανση" },
        { type: "p", text: "Η βασική λίπανση τοποθετείται πριν από την καλλιέργεια του εδάφους ή παράλληλα με τη σπορά. Σωστή συμβουλή δίνεται μετά από χημική ανάλυση εδάφους, ειδικά για τον φώσφορο. Εμπειρικά: 30–40 κιλά ανά δεκάριο λίπασμα τύπου 20-10-0 ή άλλο με αναλογία αζώτου προς φώσφορο 2:1. Η υπερβολική αζωτούχα λίπανση καθιστά τα σιτηρά ευπαθή στο πλάγιασμα και στις ασθένειες· σε περιόδους έντονων βροχοπτώσεων συστήνονται επιπλέον επιφανειακές αζωτούχες λιπάνσεις." },
      ],
      en: [
        { type: "p", text: "Every farmer knows that a good cereal harvest depends largely on the amount and distribution of rainfall. Practice has shown, however, that many other factors play an important role in a successful crop while reducing production costs." },
        { type: "h3", text: "Variety and field" },
        { type: "p", text: "Success rests on certified seed, the right barley or wheat variety and field, sowing time and depth, seed rate, soil preparation and fertilisation, the type of drill and rolling, and of course weed control. The best soils for wheat are deep sandy-clay, loam and clay soils. Barley prefers semi-fertile soils, tolerates heat better but is sensitive to cold." },
        { type: "h3", text: "Certified seed" },
        { type: "p", text: "Certified seed increases yield: high germination, high genetic purity, uniform size and free of weed seeds. It is also treated with substances that protect both seed and seedlings in early growth." },
        { type: "h3", text: "Sowing" },
        { type: "p", text: "Sow into a well-levelled, finely-tilled field for good seed-to-soil contact. Straw should not be burned but incorporated. Best sowing period: early to late November for barley, mid to late November for wheat. With modern drills the normal seed rate is 10–15 kg per 1,000 m² at 2.5–6 cm depth. Row drills give uniform distribution and precise depth control, with dense rows of 11–12 cm." },
        { type: "h3", text: "Rolling" },
        { type: "p", text: "Essential where available soil moisture is the decisive factor. Done after sowing and before emergence, when the soil is at the right moisture. A double toothed roller breaks clods, protects against erosion and does not form a crust. Speed around 80 m per minute." },
        { type: "h3", text: "Weeds" },
        { type: "ul", items: [
          "Rotation with legumes and spraying weeds during the vegetative period with a selective herbicide.",
          "Destroying wild oats at field margins with a contact herbicide.",
          "Reinstating fallow and destroying wild oat growth with deep tillage.",
          "Cutting cereals for hay right after heading and always before wild oat seed matures.",
        ] },
        { type: "h3", text: "Fertilisation" },
        { type: "p", text: "Base fertiliser is applied before tillage or with sowing. Proper advice follows a soil analysis, especially for phosphorus. As a rule of thumb: 30–40 kg per 1,000 m² of 20-10-0 or another N:P 2:1 fertiliser. Excess nitrogen makes cereals prone to lodging and disease; in periods of heavy rain, additional nitrogen top-dressings are recommended." },
      ],
    },
  },
];
