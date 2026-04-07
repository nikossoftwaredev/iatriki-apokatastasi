"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { seminarsConferences } from "@/lib/resume-data/seminars-conferences";
import { scientificWorks } from "@/lib/resume-data/scientific-works";
import { lectures } from "@/lib/resume-data/lectures";
import { otherActivities } from "@/lib/resume-data/other-activities";
import { cn } from "@/lib/utils";

const INITIAL_VISIBLE = 10;

function ExpandableList({ children, total }: { children: React.ReactNode[]; total: number }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? children : children.slice(0, INITIAL_VISIBLE);
  const remaining = total - INITIAL_VISIBLE;

  return (
    <>
      {visible}
      {!expanded && remaining > 0 && (
        <button
          onClick={() => setExpanded(true)}
          className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors mt-3 font-medium"
        >
          <ChevronDown className="h-4 w-4" />
          Εμφάνιση όλων ({remaining} ακόμα)
        </button>
      )}
      {expanded && total > INITIAL_VISIBLE && (
        <button
          onClick={() => setExpanded(false)}
          className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors mt-3 font-medium"
        >
          <ChevronDown className="h-4 w-4 rotate-180" />
          Σύμπτυξη
        </button>
      )}
    </>
  );
}

function SectionCard({ title, count, children }: { title: string; count: number; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <div className="flex items-baseline justify-between mb-5">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <span className="text-sm text-gray-400">{count} εγγραφές</span>
      </div>
      {children}
    </div>
  );
}

export default function TabbedContent() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">
        Επιστημονική Δραστηριότητα
      </h2>

      <div className="space-y-8">
        {/* Σεμινάρια - Συνέδρια */}
        <SectionCard title="Σεμινάρια - Συνέδρια" count={seminarsConferences.length}>
          <div className="space-y-2">
            <ExpandableList total={seminarsConferences.length}>
              {seminarsConferences.map((item, index) => (
                <div key={index} className="text-sm text-gray-700 pb-2 border-b border-gray-100 last:border-0">
                  <span className="font-medium text-primary">{index + 1}.</span> {item}
                </div>
              ))}
            </ExpandableList>
          </div>
        </SectionCard>

        {/* Επιστημονικές Εργασίες */}
        <SectionCard title="Επιστημονικές Εργασίες - Δημοσιεύσεις" count={scientificWorks.length}>
          <div className="space-y-3">
            <ExpandableList total={scientificWorks.length}>
              {scientificWorks.map((work, index) => (
                <div key={index} className="text-sm text-gray-700 pb-3 border-b border-gray-100 last:border-0">
                  <span className="font-medium text-primary">{index + 1}.</span>{" "}
                  <span className="font-semibold">{work.title}</span>
                  {work.authors && (
                    <p className="text-xs text-gray-500 mt-0.5">{work.authors}</p>
                  )}
                  <p className="text-xs text-gray-500">{work.publication}</p>
                  {work.date && (
                    <p className="text-xs text-gray-400">{work.date}</p>
                  )}
                </div>
              ))}
            </ExpandableList>
          </div>
        </SectionCard>

        {/* Διαλέξεις */}
        <SectionCard title="Διαλέξεις" count={lectures.length}>
          <div className="space-y-3">
            <ExpandableList total={lectures.length}>
              {lectures.map((lecture, index) => (
                <div key={index} className="border-b border-gray-100 pb-3 last:border-0">
                  <h4 className="font-semibold text-gray-800 text-sm">
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
            </ExpandableList>
          </div>
        </SectionCard>

        {/* Άλλες Δραστηριότητες */}
        <SectionCard title="Άλλες Δραστηριότητες" count={otherActivities.reduce((sum, s) => sum + s.items.length, 0)}>
          <div className="space-y-6">
            {otherActivities.map((section, index) => (
              <div key={index}>
                <h4 className={cn(
                  "font-semibold text-gray-800 mb-2 text-sm",
                  index > 0 && "pt-4 border-t border-gray-100"
                )}>
                  {section.title}
                </h4>
                <ul className="space-y-1.5">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-700 flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </section>
  );
}
