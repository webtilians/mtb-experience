import { Link } from 'react-router-dom'
import { AlertCircle } from 'lucide-react'
import Button from '../../../components/ui/Button'
import { useTranslation } from '../../../i18n'

export default function Cancellation() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-text-primary mb-8">
          {t('legal.cancellation.title')}
        </h1>

        {/* Summary box */}
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-warning flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-text-primary mb-2">
                {t('legal.cancellation.summary.title')}
              </h3>
              <ul className="text-text-secondary space-y-1">
                <li>• <strong>{t('legal.cancellation.summary.over30')}</strong></li>
                <li>• <strong>{t('legal.cancellation.summary.between')}</strong></li>
                <li>• <strong>{t('legal.cancellation.summary.under14')}</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            {t('legal.cancellation.sections.client.title')}
          </h2>

          <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">
            {t('legal.cancellation.sections.client.over30.title')}
          </h3>
          <p className="text-text-secondary mb-4">
            {t('legal.cancellation.sections.client.over30.content')}
          </p>

          <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">
            {t('legal.cancellation.sections.client.between.title')}
          </h3>
          <p className="text-text-secondary mb-4">
            {t('legal.cancellation.sections.client.between.content')}
          </p>

          <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">
            {t('legal.cancellation.sections.client.under14.title')}
          </h3>
          <p className="text-text-secondary mb-4">
            {t('legal.cancellation.sections.client.under14.content')}
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            {t('legal.cancellation.sections.modifications.title')}
          </h2>
          <p className="text-text-secondary mb-4">
            {t('legal.cancellation.sections.modifications.content1')}
          </p>
          <p className="text-text-secondary mb-4">
            {t('legal.cancellation.sections.modifications.content2')}
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            {t('legal.cancellation.sections.byUs.title')}
          </h2>
          <p className="text-text-secondary mb-4">
            {t('legal.cancellation.sections.byUs.intro')}
          </p>
          <ul className="list-disc list-inside text-text-secondary mb-4 space-y-2">
            <li>{t('legal.cancellation.sections.byUs.option1')}</li>
            <li>{t('legal.cancellation.sections.byUs.option2')}</li>
          </ul>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            {t('legal.cancellation.sections.thirdParty.title')}
          </h2>
          <p className="text-text-secondary mb-4">
            {t('legal.cancellation.sections.thirdParty.content')}
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            {t('legal.cancellation.sections.howTo.title')}
          </h2>
          <p className="text-text-secondary mb-4">
            {t('legal.cancellation.sections.howTo.intro')}
          </p>
          <ul className="list-disc list-inside text-text-secondary mb-4 space-y-2">
            <li>Email: info@mtbexperience.com</li>
            <li>WhatsApp: +34 600 000 000</li>
          </ul>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-text-secondary mb-4">
            {t('legal.cancellation.questions')}
          </p>
          <Link to="/contacto">
            <Button variant="secondary">
              {t('common.contactUs')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
