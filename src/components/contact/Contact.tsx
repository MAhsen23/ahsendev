"use client"
import React, { useState } from 'react';
import { PhoneCall, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from '../labelInput/LabelInput';

const contactInfo = [
    { icon: <PhoneCall size={20} />, title: 'Phone ', lines: ['+92 336 0906030'] },
    { icon: <Mail size={20} />, title: 'Email ', lines: ['ahsan.shiekh@outlook.com'] },
    { icon: <MapPin size={20} />, title: 'Address ', lines: ['Rawalpindi, Pakistan'] },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setResponseMessage('Please fill out all fields.');
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setResponseMessage('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setResponseMessage('Failed to send message.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setResponseMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <section id='contact' className="py-24">
            <div className="container mx-auto px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    Contact
                </h2>
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/3 space-y-6">
                        {contactInfo.map((item, index) => (
                            <div key={index} className="bg-secondary/30 p-6 rounded-xl">
                                <div className="flex items-center gap-3 mb-2">
                                    {item.icon}
                                    <span className="font-medium">{item.title}</span>
                                </div>
                                {item.lines.map((line, lineIndex) => (
                                    <p key={lineIndex} className="text-muted-foreground ml-8">{line}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="lg:w-2/3">
                        <div className="border p-10 rounded-xl">
                            <h3 className="text-xl leading-relaxed text-muted-foreground mb-6">
                                I'm always open to discussing product
                                <br />
                                <span className="font-semibold text-xl text-foreground">design work or partnerships.</span>
                            </h3>
                            <form className="space-y-8" onSubmit={handleSubmit}>
                                <FloatingLabelInput
                                    label="Name *"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <FloatingLabelInput
                                    label="Email *"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <FloatingLabelInput
                                    label="Message *"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                <Button size={"lg"} variant={"outline"} className="bg-transparent shadow-none">
                                    Submit
                                </Button>
                            </form>
                            {responseMessage && (
                                <p className="mt-4 text-center text-muted-foreground">{responseMessage}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
