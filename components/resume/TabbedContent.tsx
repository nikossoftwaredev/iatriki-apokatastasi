"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { seminarsConferences } from "@/lib/resume-data/seminars-conferences";
import { scientificWorks } from "@/lib/resume-data/scientific-works";
import { lectures } from "@/lib/resume-data/lectures";
import { otherActivities } from "@/lib/resume-data/other-activities";

const TabbedContent = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Επιστημονική Δραστηριότητα
          </h2>
          
          <Tabs defaultValue="seminars" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="seminars">
                Σεμινάρια - Συνέδρια
              </TabsTrigger>
              <TabsTrigger value="scientific">
                Επιστημονικές Εργασίες
              </TabsTrigger>
              <TabsTrigger value="lectures">
                Διαλέξεις
              </TabsTrigger>
              <TabsTrigger value="other">
                Άλλες Δραστηριότητες
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="seminars" className="mt-0">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Σεμινάρια - Συνέδρια
                </h3>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {seminarsConferences.map((item, index) => (
                    <div key={index} className="text-sm text-gray-700 pb-2 border-b border-gray-100 last:border-0">
                      <span className="font-medium text-primary">{index + 1}.</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="scientific" className="mt-0">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Επιστημονικές Εργασίες
                </h3>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {scientificWorks.map((work, index) => (
                    <div key={index} className="text-sm text-gray-700 pb-3 border-b border-gray-100 last:border-0">
                      <span className="font-medium text-primary">{index + 1}.</span> {work}
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="lectures" className="mt-0">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Διαλέξεις
                </h3>
                <div className="space-y-3">
                  {lectures.map((lecture, index) => (
                    <div key={index} className="border-b border-gray-100 pb-3 last:border-0">
                      <h4 className="font-semibold text-gray-800">
                        {lecture.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {lecture.event}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {lecture.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="other" className="mt-0">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Άλλες Δραστηριότητες
                </h3>
                <div className="space-y-6">
                  {otherActivities.map((section, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {section.title}
                      </h4>
                      <ul className="space-y-1">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm text-gray-700 flex items-start">
                            <span className="mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default TabbedContent;