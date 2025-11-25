/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import './GuidingPrincipleCard.scss';
import './GuidingPrinciples.scss';
import { IxTypography } from '@siemens/ix-react';

function GuidingPrincipleCard(
  props: React.PropsWithChildren<{ name: string; link?: string; description: string }>
) {
  const { name, link, description } = props;

  if (!link) {
    return (
    <div className="GuidingPrincipleCard">
      <div className="GuidingPrincipleCard__Image">{props.children}</div>

      <IxTypography format="h2">{name}</IxTypography>
      <div className="GuidingPrincipleCard__Description">{description}</div>
    </div>
    );
  }

  return (
    <a href={link} className="GuidingPrincipleCard">
      <div className="GuidingPrincipleCard__Image">{props.children}</div>

      <IxTypography format="h2">{name}</IxTypography>
      <div className="GuidingPrincipleCard__Description">{description}</div>
    </a>
  );
}

function GuidingPrinciples() {
return (
    <div className="GuidingPrinciples">
      <GuidingPrincipleCard
        name="Simplify for clarity"
        description="We make it easier for our users to handle industrial complexity."
      >
        <svg width="100%" height="100%" viewBox="0 0 271 271" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M136 75.25L75.25 123.85V196.75H129.25V163H142.75V196.75H196.75V123.85L136 75.25ZM183.25 183.25H156.25V149.5H115.75V183.25H88.75V129.25L136 92.125L183.25 129.25V183.25Z" fill="white"/>
</svg>
      </GuidingPrincipleCard>
      <GuidingPrincipleCard
        name="Design for flexibility"
        description="We create interfaces that adapt seamlessly to our users in their industrial environment."
      >
        <svg width="100%" height="100%" viewBox="0 0 271 271" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M136 94.6963L147.906 88.75H203.5V190H151.086L136 197.547L120.907 190H68.5V88.75H124.094L136 94.6963ZM82 176.5H124.094L129.25 179.074V106.421L120.907 102.25H82V176.5ZM142.75 106.42V179.074L147.906 176.5H190V102.25H151.086L142.75 106.42ZM122.5 152.875H88.75V142.75H122.5V152.875ZM183.25 152.875H149.5V142.75H183.25V152.875ZM122.5 125.875H88.75V115.75H122.5V125.875ZM183.25 125.875H149.5V115.75H183.25V125.875Z" fill="white"/>
</svg>
      </GuidingPrincipleCard>

      <GuidingPrincipleCard
        name="Empower users"
        description="We use technology to assist our users and accelerate their industrial workflows."
      >
        <svg width="100%" height="100%" viewBox="0 0 271 271" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M142.75 129.25H196.75V196.75H75.25V75.25H142.75V129.25ZM88.75 183.25H129.25V142.75H88.75V183.25ZM142.75 183.25H183.25V142.75H142.75V183.25ZM88.75 129.25H129.25V88.75H88.75V129.25ZM196.75 115.75H156.25V75.25H196.75V115.75ZM169.75 88.75V102.25H183.25V88.75H169.75Z" fill="white"/>
</svg>
      </GuidingPrincipleCard>

      <GuidingPrincipleCard
        name="Build for humans"
        description="We strive to create products that are beneficial to our users in the industrial ecosphere and to society at large."
      >
        <svg width="100%" height="100%" viewBox="0 0 271 271" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M203.5 115.75L136 206.875L68.5 115.75L95.5 82H176.5L203.5 115.75ZM136 181.562L151.577 120.812H120.423L136 181.562ZM126.815 177.701L108.906 120.812H88.9199L126.815 177.701ZM145.195 177.665L183.072 120.812H163.094L145.195 177.665ZM161.031 110.688H182.167L170.014 95.5H150.062L161.031 110.688ZM122.5 110.688H149.5L139.375 95.5H132.625L122.5 110.688ZM89.8271 110.688H110.969L121.938 95.5H101.98L89.8271 110.688Z" fill="white"/>
</svg>
      </GuidingPrincipleCard>
    </div>
  );
}

function GuidingLinks() {
  return (
    <div className="GuidingPrinciples">
      <GuidingPrincipleCard
        name="Guidelines"
        link="../guidelines/overview"
        description="Information such as design principles, UX writing and conversational design or mobile experience."
      >
        <svg width="100%" height="100%" viewBox="0 0 271 271" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M136 94.6963L147.906 88.75H203.5V190H151.086L136 197.547L120.907 190H68.5V88.75H124.094L136 94.6963ZM82 176.5H124.094L129.25 179.074V106.421L120.907 102.25H82V176.5ZM142.75 106.42V179.074L147.906 176.5H190V102.25H151.086L142.75 106.42ZM122.5 152.875H88.75V142.75H122.5V152.875ZM183.25 152.875H149.5V142.75H183.25V152.875ZM122.5 125.875H88.75V115.75H122.5V125.875ZM183.25 125.875H149.5V115.75H183.25V125.875Z" fill="white"/>
</svg>
      </GuidingPrincipleCard>

      <GuidingPrincipleCard
        name="Components"
        link="../components/overview"
        description="Usage guidelines and a code tab to find component previews and code examples for all supported frameworks."
      >
        <svg width="100%" height="100%" viewBox="0 0 271 271" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M142.75 129.25H196.75V196.75H75.25V75.25H142.75V129.25ZM88.75 183.25H129.25V142.75H88.75V183.25ZM142.75 183.25H183.25V142.75H142.75V183.25ZM88.75 129.25H129.25V88.75H88.75V129.25ZM196.75 115.75H156.25V75.25H196.75V115.75ZM169.75 88.75V102.25H183.25V88.75H169.75Z" fill="white"/>
</svg>
      </GuidingPrincipleCard>

      <GuidingPrincipleCard
        name="Icons"
        link="../icons/icon-library"
        description="Icon library with usage guidelines and code snippets to integrate icons directly into your code."
      >
        <svg width="100%" height="100%" viewBox="0 0 271 271" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M203.5 115.75L136 206.875L68.5 115.75L95.5 82H176.5L203.5 115.75ZM136 181.562L151.577 120.812H120.423L136 181.562ZM126.815 177.701L108.906 120.812H88.9199L126.815 177.701ZM145.195 177.665L183.072 120.812H163.094L145.195 177.665ZM161.031 110.688H182.167L170.014 95.5H150.062L161.031 110.688ZM122.5 110.688H149.5L139.375 95.5H132.625L122.5 110.688ZM89.8271 110.688H110.969L121.938 95.5H101.98L89.8271 110.688Z" fill="white"/>
</svg>
      </GuidingPrincipleCard>

      <GuidingPrincipleCard
        name="Styles"
        link="../styles/colors"
        description="Style definitions including themes, colors, borders, shadows, elevation and typography."
      >
        <svg width="100%" height="100%" viewBox="0 0 271 271" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M136 68.5C173.221 68.5 203.5 95.6587 203.5 129.039C203.487 139.548 199.304 149.624 191.872 157.055C184.44 164.485 173.509 169.738 163 169.75H151.267C149.776 169.75 148.412 169.883 147.357 170.937C146.303 171.991 145.901 172.813 145.901 174.305C145.929 175.695 146.447 177.031 147.357 178.082C149.88 180.859 151.272 184.481 151.267 188.233L151.194 189.743C150.847 193.238 149.303 196.526 146.798 199.031L145.677 200.039C142.96 202.266 139.544 203.5 136 203.5C98.7786 203.5 68.5 173.221 68.5 136C68.5 98.7786 98.7786 68.5 136 68.5ZM136 82C106.234 82 82 106.234 82 136C82 165.766 106.234 190 136 190C136.469 190 136.921 189.811 137.253 189.479C137.582 189.149 137.766 188.7 137.767 188.233V188.214C137.767 187.825 137.626 187.447 137.364 187.159L137.253 187.04L137.147 186.922C134.171 183.484 132.495 179.109 132.407 174.562L132.401 174.431V174.305C132.401 172.332 132.667 169.755 133.878 167.008C135.049 164.351 136.681 162.518 137.807 161.392L138.809 160.462C143.864 156.144 149.699 156.25 151.267 156.25H162.987C169.351 156.242 176.99 152.845 182.327 147.51C187.227 142.611 189.987 135.967 190 129.039L189.935 126.738C188.566 103.075 166.21 82 136 82ZM98.875 122.5C104.467 122.5 109 127.033 109 132.625C109 138.217 104.467 142.75 98.875 142.75C93.2831 142.75 88.75 138.217 88.75 132.625C88.75 127.033 93.2831 122.5 98.875 122.5ZM173.125 122.5C178.717 122.5 183.25 127.033 183.25 132.625C183.25 138.217 178.717 142.75 173.125 142.75C167.533 142.75 163 138.217 163 132.625C163 127.033 167.533 122.5 173.125 122.5ZM119.125 95.5C124.717 95.5 129.25 100.033 129.25 105.625C129.25 111.217 124.717 115.75 119.125 115.75C113.533 115.75 109 111.217 109 105.625C109 100.033 113.533 95.5 119.125 95.5ZM152.875 95.5C158.467 95.5 163 100.033 163 105.625C163 111.217 158.467 115.75 152.875 115.75C147.283 115.75 142.75 111.217 142.75 105.625C142.75 100.033 147.283 95.5 152.875 95.5Z" fill="white"/>
</svg>
      </GuidingPrincipleCard>
    </div>
  );
}

export default GuidingPrinciples;
export { GuidingLinks };
