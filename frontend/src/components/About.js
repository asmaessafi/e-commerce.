import React from 'react';
import { Users, Globe, Heart, ShieldCheck } from 'lucide-react';

export default function About() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[500px] bg-cover bg-center" style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1590664216212-62e763768cae?w=2000&auto=format&fit=crop&q=80")'
            }}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B]/90 to-[#4ECDC4]/90" />
                <div className="relative container mx-auto px-4 h-full flex items-center">
                    <div className="max-w-2xl text-white">
                        <h1 className="text-5xl font-bold mb-6">About Bazario</h1>
                        <p className="text-xl">Your premier Tunisian marketplace connecting artisans, merchants, and shoppers in a vibrant digital souk.</p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            At Bazario, we're bridging traditional Tunisian commerce with modern digital convenience.
                            Our platform celebrates the rich heritage of Tunisian craftsmanship while embracing the future of e-commerce.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Globe className="w-12 h-12 text-[#FF6B6B]" />,
                                title: "Local & Global",
                                description: "Connecting Tunisian vendors with customers worldwide"
                            },
                            {
                                icon: <Users className="w-12 h-12 text-[#4ECDC4]" />,
                                title: "Community First",
                                description: "Building a thriving marketplace community"
                            },
                            {
                                icon: <Heart className="w-12 h-12 text-[#FF6B6B]" />,
                                title: "Authentic Culture",
                                description: "Preserving and sharing Tunisian traditions"
                            },
                            {
                                icon: <ShieldCheck className="w-12 h-12 text-[#4ECDC4]" />,
                                title: "Trust & Quality",
                                description: "Ensuring the highest standards for all products"
                            }
                        ].map((item, index) => (
                            <div key={index} className="text-center p-6">
                                <div className="mb-4 flex justify-center">{item.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-gradient-to-br from-[#FF6B6B]/10 to-[#4ECDC4]/10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1590664216212-62e763768cae?w=800&auto=format&fit=crop&q=80"
                                alt="Bazario Story"
                                className="rounded-2xl shadow-xl"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    Founded in 2024, Bazario emerged from a vision to digitize Tunisia's vibrant
                                    marketplace culture. We recognized the need to preserve traditional commerce while
                                    adapting to modern shopping habits.
                                </p>
                                <p>
                                    Today, we're proud to host thousands of vendors, from traditional artisans to
                                    modern retailers, all sharing the best of Tunisia with the world.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                name: "Sarah Ben Ali",
                                role: "Founder & CEO",
                                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60"
                            },
                            {
                                name: "Ahmed Mansour",
                                role: "Head of Operations",
                                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60"
                            },
                            {
                                name: "Leila Karoui",
                                role: "Creative Director",
                                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60"
                            },
                            {
                                name: "Youssef Taleb",
                                role: "Tech Lead",
                                image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=60"
                            }
                        ].map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="mb-4 relative group">
                                    <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}