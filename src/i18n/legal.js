// Legal content (Impressum + Datenschutz), kept as language-keyed data so the
// LegalDialog can render it the same way for DE and EN. Long-form legal copy
// lives here rather than in the UI string files (de.json / en.json) to keep
// those lean. Fields only the operator can supply are marked with [ ] — fill
// them before going live (legal name / Inhaber, USt-IdNr., hosting provider).
export const legal = {
  de: {
    imprint: {
      title: 'Impressum',
      sections: [
        {
          heading: 'Angaben gemäß § 5 TMG',
          body: [
            'The Gin Library',
            '[Inhaber: Vor- und Nachname]',
            'Am Büchel 11',
            '52062 Aachen',
            'Deutschland',
          ],
        },
        {
          heading: 'Kontakt',
          body: ['Telefon: +49 160 94454665', 'E-Mail: theginlibrary@web.de'],
        },
        {
          heading: 'Umsatzsteuer-ID',
          body: [
            'Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:',
            '[USt-IdNr., sofern vorhanden]',
          ],
        },
        {
          heading: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
          body: ['[Vor- und Nachname]', 'Am Büchel 11, 52062 Aachen'],
        },
      ],
    },
    privacy: {
      title: 'Datenschutzerklärung',
      sections: [
        {
          heading: 'Verantwortlicher',
          body: [
            '[Inhaber: Vor- und Nachname]',
            'The Gin Library, Am Büchel 11, 52062 Aachen',
            'E-Mail: theginlibrary@web.de',
          ],
        },
        {
          heading: 'Erhebung und Verwendung von Daten',
          body: [
            'Diese Website verarbeitet personenbezogene Daten nur, soweit es für die Bereitstellung der Seite und die Beantwortung Ihrer Anfragen erforderlich ist. Wenn Sie uns per E-Mail oder Telefon kontaktieren, verwenden wir Ihre Angaben ausschließlich zur Bearbeitung Ihrer Reservierung oder Anfrage.',
          ],
        },
        {
          heading: 'Lokale Speicherung',
          body: [
            'Wir setzen keine Tracking- oder Analyse-Cookies ein. Ihre gewählte Sprache (Deutsch oder Englisch) wird lokal in Ihrem Browser gespeichert (localStorage), damit die Seite sie bei Ihrem nächsten Besuch beibehält. Diese Information verlässt Ihr Gerät nicht.',
          ],
        },
        {
          heading: 'Hosting',
          body: [
            'Beim Aufruf der Seite verarbeitet unser Hosting-Anbieter technisch notwendige Server-Logdaten (z. B. IP-Adresse und Zeitpunkt des Zugriffs). [Hosting-Anbieter und Auftragsverarbeitungsvertrag ergänzen.]',
          ],
        },
        {
          heading: 'Ihre Rechte',
          body: [
            'Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie ein Beschwerderecht bei einer Aufsichtsbehörde. Wenden Sie sich hierzu an die oben genannte Adresse.',
          ],
        },
      ],
    },
  },
  en: {
    imprint: {
      title: 'Imprint',
      sections: [
        {
          heading: 'Information pursuant to § 5 TMG',
          body: [
            'The Gin Library',
            '[Owner: first and last name]',
            'Am Büchel 11',
            '52062 Aachen',
            'Germany',
          ],
        },
        {
          heading: 'Contact',
          body: ['Phone: +49 160 94454665', 'Email: theginlibrary@web.de'],
        },
        {
          heading: 'VAT ID',
          body: [
            'VAT identification number pursuant to § 27a German VAT Act:',
            '[VAT ID, if applicable]',
          ],
        },
        {
          heading: 'Responsible for content pursuant to § 18 (2) MStV',
          body: ['[First and last name]', 'Am Büchel 11, 52062 Aachen'],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      sections: [
        {
          heading: 'Controller',
          body: [
            '[Owner: first and last name]',
            'The Gin Library, Am Büchel 11, 52062 Aachen',
            'Email: theginlibrary@web.de',
          ],
        },
        {
          heading: 'Collection and use of data',
          body: [
            'This website processes personal data only to the extent necessary to provide the site and respond to your enquiries. If you contact us by email or phone, we use your details solely to handle your reservation or request.',
          ],
        },
        {
          heading: 'Local storage',
          body: [
            'We use no tracking or analytics cookies. Your chosen language (German or English) is stored locally in your browser (localStorage) so the site remembers it on your next visit. This information never leaves your device.',
          ],
        },
        {
          heading: 'Hosting',
          body: [
            'When you open the site, our hosting provider processes technically necessary server log data (such as IP address and time of access). [Add hosting provider and data processing agreement.]',
          ],
        },
        {
          heading: 'Your rights',
          body: [
            'You have the right to access, rectify, erase and restrict the processing of your personal data, as well as the right to lodge a complaint with a supervisory authority. To exercise these rights, please contact the address above.',
          ],
        },
      ],
    },
  },
}
