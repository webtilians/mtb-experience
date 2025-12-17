import { useTranslation } from '../../../i18n'

export default function Terms() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-text-primary mb-8">
          {t('legal.terms.title')}
        </h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-text-secondary">
            {t('legal.lastUpdated')}
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            {t('legal.terms.sections.object.title')}
          </h2>
          <p className="text-text-secondary mb-4">
            {t('legal.terms.sections.object.content')}
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            {t('legal.terms.sections.included.title')}
          </h2>
          <p className="text-text-secondary mb-4">
            {t('legal.terms.sections.included.intro')}
          </p>
          <ul className="list-disc list-inside text-text-secondary mb-4 space-y-2">
            <li>{t('legal.terms.sections.included.items.guide')}</li>
            <li>{t('legal.terms.sections.included.items.planning')}</li>
            <li>{t('legal.terms.sections.included.items.support')}</li>
            <li>{t('legal.terms.sections.included.items.accommodation')}</li>
          </ul>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            {t('legal.terms.sections.thirdParty.title')}
          </h2>
          <p className="text-text-secondary mb-4">
            {t('legal.terms.sections.thirdParty.intro')}
          </p>
          <ul className="list-disc list-inside text-text-secondary mb-4 space-y-2">
            <li>{t('legal.terms.sections.thirdParty.items.transport')}</li>
            <li>{t('legal.terms.sections.thirdParty.items.shuttle')}</li>
            <li>{t('legal.terms.sections.thirdParty.items.rental')}</li>
            <li>{t('legal.terms.sections.thirdParty.items.accommodation')}</li>
          </ul>
          <p className="text-text-secondary mb-4">
            {t('legal.terms.sections.thirdParty.disclaimer')}
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            {t('legal.terms.sections.requirements.title')}
          </h2>
          <p className="text-text-secondary mb-4">
            {t('legal.terms.sections.requirements.intro')}
          </p>
          <ul className="list-disc list-inside text-text-secondary mb-4 space-y-2">
            <li>{t('legal.terms.sections.requirements.items.level')}</li>
            <li>{t('legal.terms.sections.requirements.items.insurance')}</li>
            <li>{t('legal.terms.sections.requirements.items.protection')}</li>
            <li>{t('legal.terms.sections.requirements.items.guide')}</li>
          </ul>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            {t('legal.terms.sections.liability.title')}
          </h2>
          <p className="text-text-secondary mb-4">
            {t('legal.terms.sections.liability.content')}
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            {t('legal.terms.sections.modifications.title')}
          </h2>
          <p className="text-text-secondary mb-4">
            {t('legal.terms.sections.modifications.content')}
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            {t('legal.terms.sections.contact.title')}
          </h2>
          <p className="text-text-secondary mb-4">
            {t('legal.terms.sections.contact.content')}
          </p>
        </div>
      </div>
    </div>
  )
}
