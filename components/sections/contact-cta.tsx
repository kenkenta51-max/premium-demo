const fields = [
  { id: 'name', label: 'お名前', type: 'text', autoComplete: 'name' },
  {
    id: 'company',
    label: '会社名',
    type: 'text',
    autoComplete: 'organization',
  },
  { id: 'email', label: 'メールアドレス', type: 'email', autoComplete: 'email' },
];

const ContactCta = () => {
  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="mb-6 font-heading text-3xl font-bold text-foreground md:text-4xl">
          お問い合わせ
        </h2>
        <p className="mb-16 text-lg leading-relaxed text-muted-foreground">
          経営課題のご相談や取り組み内容の詳細については、以下のフォームよりお気軽にお問い合わせください。
        </p>

        <form className="flex flex-col gap-6 text-left">
          {fields.map((field) => (
            <div key={field.id} className="flex flex-col gap-2">
              <label
                htmlFor={field.id}
                className="text-sm font-medium text-foreground"
              >
                {field.label}
              </label>
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                autoComplete={field.autoComplete}
                className="rounded-input border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          ))}

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-foreground"
            >
              お問い合わせ内容
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="rounded-input border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <button
            type="submit"
            className="mt-4 self-center rounded-button bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-secondary"
          >
            送信する
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactCta;
