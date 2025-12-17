import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useTranslation } from '../../i18n'

export default function FAQ() {
  const { t } = useTranslation()
  const [openItems, setOpenItems] = useState<string[]>([])

  const faqs = [
    {
      category: t('faq.categories.general'),
      questions: [
        {
          q: t('faq.questions.guideService.q'),
          a: t('faq.questions.guideService.a'),
        },
        {
          q: t('faq.questions.level.q'),
          a: t('faq.questions.level.a'),
        },
        {
          q: t('faq.questions.duration.q'),
          a: t('faq.questions.duration.a'),
        },
      ],
    },
    {
      category: t('faq.categories.accommodation'),
      questions: [
        {
          q: t('faq.questions.verified.q'),
          a: t('faq.questions.verified.a'),
        },
        {
          q: t('faq.questions.ownAccommodation.q'),
          a: t('faq.questions.ownAccommodation.a'),
        },
        {
          q: t('faq.questions.availability.q'),
          a: t('faq.questions.availability.a'),
        },
      ],
    },
    {
      category: t('faq.categories.pricing'),
      questions: [
        {
          q: t('faq.questions.managementFee.q'),
          a: t('faq.questions.managementFee.a'),
        },
        {
          q: t('faq.questions.payments.q'),
          a: t('faq.questions.payments.a'),
        },
        {
          q: t('faq.questions.cancellation.q'),
          a: t('faq.questions.cancellation.a'),
        },
      ],
    },
    {
      category: t('faq.categories.logistics'),
      questions: [
        {
          q: t('faq.questions.bike.q'),
          a: t('faq.questions.bike.a'),
        },
        {
          q: t('faq.questions.transport.q'),
          a: t('faq.questions.transport.a'),
        },
        {
          q: t('faq.questions.shuttle.q'),
          a: t('faq.questions.shuttle.a'),
        },
      ],
    },
  ]

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            {t('faq.title')}
          </h1>
          <p className="text-text-secondary">
            {t('faq.subtitle')}
          </p>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {faqs.map((section) => (
          <div key={section.category} className="mb-10">
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              {section.category}
            </h2>
            <div className="space-y-3">
              {section.questions.map((item, index) => {
                const itemId = `${section.category}-${index}`
                const isOpen = openItems.includes(itemId)

                return (
                  <div
                    key={itemId}
                    className="bg-surface border border-border rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(itemId)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-text-primary pr-4">
                        {item.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-text-secondary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-text-secondary flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4">
                        <p className="text-text-secondary">{item.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
