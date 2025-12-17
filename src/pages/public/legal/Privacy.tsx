import { useTranslation } from '../../../i18n'

export default function Privacy() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-text-primary mb-8">
          {t('legal.privacy.title')}
        </h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-text-secondary">
            {t('legal.lastUpdated')}
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            {t('legal.privacy.sections.controller.title')}
          </h2>
          <p className="text-text-secondary mb-4">
            {t('legal.privacy.sections.controller.content')}
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            {t('legal.privacy.sections.data.title')}
          </h2>
          <p className="text-text-secondary mb-4">
            {t('legal.privacy.sections.data.intro')}
          </p>
          <ul className="list-disc list-inside text-text-secondary mb-4 space-y-2">
            <li>{t('legal.privacy.sections.data.items.name')}</li>
            <li>{t('legal.privacy.sections.data.items.email')}</li>
            <li>{t('legal.privacy.sections.data.items.phone')}</li>
            <li>{t('legal.privacy.sections.data.items.booking')}</li>
            <li>{t('legal.privacy.sections.data.items.payment')}</li>
          </ul>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            {t('legal.privacy.sections.purpose.title')}
          </h2>
          <p className="text-text-secondary mb-4">
            {t('legal.privacy.sections.purpose.intro')}
          </p>
          <ul className="list-disc list-inside text-text-secondary mb-4 space-y-2">
            <li>{t('legal.privacy.sections.purpose.items.manage')}</li>
            <li>{t('legal.privacy.sections.purpose.items.communicate')}</li>
            <li>{t('legal.privacy.sections.purpose.items.coordinate')}</li>
            <li>{t('legal.privacy.sections.purpose.items.marketing')}</li>
          </ul>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            {t('legal.privacy.sections.legal.title')}
          </h2>
          <p className="text-text-secondary mb-4">
            {t('legal.privacy.sections.legal.content')}
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            {t('legal.privacy.sections.sharing.title')}
          </h2>
          <p className="text-text-secondary mb-4">
            {t('legal.privacy.sections.sharing.intro')}
          </p>
          <ul className="list-disc list-inside text-text-secondary mb-4 space-y-2">
            <li>{t('legal.privacy.sections.sharing.items.accommodation')}</li>
            <li>{t('legal.privacy.sections.sharing.items.partners')}</li>
            <li>{t('legal.privacy.sections.sharing.items.payment')}</li>
          </ul>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            {t('legal.privacy.sections.rights.title')}
          </h2>
          <p className="text-text-secondary mb-4">
            {t('legal.privacy.sections.rights.content')}
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            {t('legal.privacy.sections.cookies.title')}
          </h2>
          <p className="text-text-secondary mb-4">
            {t('legal.privacy.sections.cookies.content')}
          </p>
        </div>
      </div>
    </div>
  )
}
