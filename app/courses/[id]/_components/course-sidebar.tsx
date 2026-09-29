"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CourseSidebar() {
  const params = useParams();
  const courseId = params.id;
  return (
    <div className="w-full bg-white rounded-[24px] p-10 shadow-[0px_4px_24px_rgba(0,0,0,0.06)] border border-neutral-200 flex flex-col">
      <h3 className="text-heading-s text-neutral-950 font-bold mb-6">112 Lessons (24 hours)</h3>
      
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-3">
            <span className="text-body-m text-neutral-700 font-medium">01</span>
            <span className="text-body-m text-neutral-750 font-medium">Introduction to Digital Assets</span>
          </div>
          <span className="text-body-m text-electric-violet-600 font-medium whitespace-nowrap">12 mins</span>
        </div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-3">
            <span className="text-body-m text-neutral-700 font-medium">02</span>
            <span className="text-body-m text-neutral-750 font-medium">Design Principles for Impacts</span>
          </div>
          <span className="text-body-m text-electric-violet-600 font-medium whitespace-nowrap">21 mins</span>
        </div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-3">
            <span className="text-body-m text-neutral-700 font-medium">03</span>
            <span className="text-body-m text-neutral-750 font-medium">Advanced Techniques in Digital Creation</span>
          </div>
          <span className="text-body-m text-electric-violet-600 font-medium whitespace-nowrap">15 mins</span>
        </div>
      </div>
      
      <button className="text-body-m text-neutral-700 font-medium text-left hover:text-neutral-950 transition-colors mb-8">
        99 more videos
      </button>

      <p className="text-body-m text-neutral-700 mb-6">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-heading-m text-electric-violet-600 font-bold">$25</span>
        <span className="text-body-m text-neutral-700">/lifetime</span>
      </div>

      <button className="w-full h-12 rounded-[100px] bg-lime-400 hover:bg-lime-400 transition-colors text-body-m font-semibold text-neutral-950 mb-8">
        Enroll Now
      </button>

      <h4 className="text-heading-xs text-neutral-950 font-bold mb-4">This course include</h4>
      <div className="flex flex-col gap-3 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            <Image src="/images/icons/resources.svg" alt="Resource" width={16} height={16} />
          </div>
          <span className="text-body-m text-neutral-700">Learning Resources</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            <Image src="/images/icons/webcam.svg" alt="Videos" width={16} height={16} />
          </div>
          <span className="text-body-m text-neutral-700">Quality Lesson Videos</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            <Image src="/images/icons/certificate.svg" alt="Certificate" width={16} height={16} />
          </div>
          <span className="text-body-m text-neutral-700">Certificate of Completion</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            <Image src="/images/icons/private_consultation.svg" alt="Consultation" width={16} height={16} />
          </div>
          <span className="text-body-m text-neutral-700">Private Consultation</span>
        </div>
      </div>

      <div className="pt-6 border-t border-neutral-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0">
            <Image src="/images/avatars/pureparl.png" alt="PurePearl Studio" fill className="object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-label-l text-neutral-950">PurePearl Studio</span>
            <span className="text-body-m text-neutral-700">Professional Creator</span>
          </div>
        </div>
        
        <p className="text-body-m text-neutral-700 mb-6">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <Link href={`/courses/${courseId}/studio`} className="px-4 py-2 rounded-[24px] border border-neutral-200 hover:bg-neutral-50 transition-colors text-label-m text-neutral-700 w-fit">
          See Full Profile
        </Link>
      </div>
    </div>
  );
}
