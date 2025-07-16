"use client";

import SectionContainer from "@/components/utilities/section-container";
import TextLink from "@/components/utilities/text-link";
import TitleContainer from "@/components/utilities/title-container";
import {
  Bold,
  Code,
  CodeBlock,
  H2,
  H3,
  Ol,
  P,
} from "@/components/utilities/typography";
import { HandHeartIcon, HeartIcon, WarningIcon } from "@phosphor-icons/react";

export default function Contribute() {
  return (
    <main className="flex flex-col flex-1 gap-4">
      <TitleContainer Icon={HandHeartIcon}>How To Contribute</TitleContainer>

      {/* Post Contribution */}
      <SectionContainer>
        <H2>Post Contribution</H2>

        {/* Rules */}
        <H3 className="w-full mt-6">
          Rules for contributing a post (Post TOS)
        </H3>
        <Ol className="pb-0 text-justify">
          <li>We do NOT accept:</li>
          <Ol useLetters className="py-0">
            <li>Plagiarized or AI-generated spammy content.</li>
            <li>Posts promoting hate, stereotypes, or manipulation.</li>
            <li>Overly promotional content or affiliate-heavy posts.</li>
            <li>Explicit adult content.</li>
            <li>Thin content or generic advice without personal voice.</li>
          </Ol>
          <li>
            Posts must be 100% original, and can only be cross-published on your
            own media spaces (you cannot submit posts of other people, even if
            they gave you consent &ndash; they have to do it themselves).
          </li>
          <li>Your post should fall into one of these areas:</li>
          <Ol useLetters className="py-0">
            <li>Modern dating advice.</li>
            <li>Relationship communication.</li>
            <li>Online dating tips.</li>
            <li>First date ideas.</li>
            <li>Navigating dating apps.</li>
            <li>Red flags & green flags.</li>
            <li>
              Gender-specific dating perspectives (inclusive and respectful).
            </li>
            <li>Personal dating experiences with a lesson.</li>
            <li>All other themes accepted by the website's owner.</li>
          </Ol>
          <li>
            The tone of your post should be approachable, inclusive, honest, and
            helpful. Avoid clichés or aggressive "pickup artist" style content.
          </li>
          <li>Your post should fit in an 800-1,500 word count.</li>
          <li>
            Your post should provide tips, stories, and/or examples. If you
            include stats or studies, please link to reputable sources.
          </li>
        </Ol>
        <P>
          <WarningIcon className="inline mr-2" />
          We reserve the right to modify or update these Terms of Service at any
          time, without prior notice. By submitting a post, you agree to these
          Terms of Service.
        </P>
        <P>
          <WarningIcon className="inline mr-2" />
          <Bold>
            Breaking any of these rules (especially the rule #1) might get you
            permanently blacklisted from contributing to this project.
          </Bold>
        </P>
        <P>
          <WarningIcon className="inline mr-2" />
          If you think someone plagiarized your content on this website,{" "}
          <Bold>please contact me immediately</Bold> through any contact
          method&mdash;I will try to resolve this issue as quickly as possible.
        </P>

        {/* Guide */}
        <H3 className="w-full mt-6">How to submit a post</H3>
        <P>
          If you consider yourself experiened in dating and think you can take
          up the challenge of guiding others' dating endeavors, then the easiest
          way to contribute is to essentially{" "}
          <Bold>
            send me a message with your name, blog post (including title), a
            short intro (2-3 sentences), and an optional{" "}
            <TextLink href="https://github.com/" blank>
              GitHub
            </TextLink>{" "}
            link
          </Bold>
          &mdash;in any readable file format. However, I'd very much appreciate
          if you did so in the <Bold>Markdown</Bold> (.md or .mdx) file format,
          as it's used for all the posts on here!
        </P>
        <P>
          You can contact me through one of the contact options at the bottom of
          this page! If you want, you can also send your post to the e-mail:{" "}
          <Code>nickveles.pro@gmail.com</Code> with the message title{" "}
          <Code>DatingSimplified - [your post title]</Code>.
        </P>

        {/* Example */}
        <H3 className="w-full mt-6">Example Markdown file and used tags</H3>
        <div className="w-full mt-6 mb-1">
          <Code>your-posts-title.mdx</Code>
        </div>
        <CodeBlock forceFirst className="w-full">
          <p>---</p>
          <p>title: "Your post's title" (required)</p>
          <p>createdAt: "yyyy-MM-dd HH:mm:ss" (date - leave empty)</p>
          <p>updatedAt: "yyyy-MM-dd HH:mm:ss" (date - leave empty)</p>
          <p>authorsIds: [1, 2, 3] (authors' Ids - leave empty)</p>
          <p>editorsIds: [1, 2, 3] (editors' Ids - leave empty)</p>
          <p>
            thumbnail: "http://example.com/photo.jpg" (post thumbnail -
            optional)
          </p>
          <p>---</p>
          <br />
          <p># H1 tag</p>
          <br />
          <p>## H2 tag</p>
          <br />
          <p>### H3 tag</p>
          <br />
          <p>#### H4 tag</p>
          <br />
          <p>Paragraph text</p>
          <p>Still the same paragraph</p>
          <br />
          <p>New paragraph</p>
          <br />
          <p>&gt; Block quote</p>
          <p>&gt; Still the same block quote</p>
          <br />
          <p>&gt; New block quote</p>
          <br />
          <p>- Unorganized list item #1</p>
          <p>- Unorganized list item #2</p>
          <p>- Unorganized list item #3</p>
          <br />
          <p>1. Organized list item #1</p>
          <p>2. Organized list item #2</p>
          <p>3. Organized list item #3</p>
          <br />
          <p>`inline code - I don't know why you'd use it, but it's there!`</p>
          <br />
          <p>```</p>
          <p>code block - also not sure why you'd use it</p>
          <p>```</p>
          <br />
          <p>*italic text*</p>
          <br />
          <p>**bold text**</p>
          <br />
          <p>***italic bold text***</p>
          <br />
          <p>[link text](https://example.com)</p>
          <br />
          <p>![image alternative text](https://example.com/photo.jpg)</p>
        </CodeBlock>
        <P>
          If you want to use a custom image that isn't hosted online, you need
          to send it to me as well!
        </P>

        {/* Contact */}
        <H3 className="w-full mt-6">Conclusion</H3>
        <P>
          Once I decide your post makes sense and doesn't break any rules, it
          will be integrated shortly after into the site with correct
          attribution (you can also choose to appear as an anonymous author in
          case you want to stay unnoticed). I will respond to your message, even
          if it does not meet the site's post criteria.
        </P>
        <P>Thank you for considering to post on our website!</P>
      </SectionContainer>

      {/* Code Contribution */}
      <SectionContainer accented>
        <H2>Code Contribution</H2>
        <P>
          Even though it's an open source project, it's also part of my
          portfolio, and I am very strict on any code changes, since this
          project is meant to reflect my skills.
        </P>
        <P>
          However, you're always welcome to contribute any typo fixes and post
          edits. Remember to uphold the common GitHub etiquette, as well as
          appending yourself to the list of editors at the top of the post file
          (<Code className="bg-background">editorsIds</Code> property &ndash;
          you can use the Id value of <Code className="bg-background">0</Code>{" "}
          to stay anonymous), as well as the list of writers (in{" "}
          <Code className="bg-background">constants/writers.ts</Code>) if you're
          not already there.
        </P>
        <P>
          If you want to make any major code changes, I'd appreciate if you
          provided me with your reasoning at the very least! I'm still a junior
          programmer, and I want to learn as much as possible! Any guidance,
          even verbal, is more than you could imagine!
        </P>
        <P>
          You're also always welcome to fork this project if you want to give it
          your own unique spin! Though please remember that it's licensed under
          the{" "}
          <TextLink
            href="https://www.apache.org/licenses/LICENSE-2.0.txt"
            blank
          >
            Apache License 2.0
          </TextLink>
          .
        </P>
      </SectionContainer>

      {/* Other Contribution */}
      <SectionContainer>
        <H2>Other Contribution</H2>
        <P>
          If you want to contribute in any other way, please contact me through
          any other contact method at the bottom of this page.
        </P>
        <P>
          <HeartIcon className="inline mr-2 text-xl" />
          If you like what I do as a developer, you might also consider
          contributing to all my work in general by{" "}
          <TextLink href="https://coff.ee/nickveles" blank>
            buying me a coffee
          </TextLink>
          ! If you mention coming from this project, it'll also grand you a
          space in the "Thank You" section on the Home page!
        </P>
        <P>Thank you for all your contributions!</P>
      </SectionContainer>
    </main>
  );
}
