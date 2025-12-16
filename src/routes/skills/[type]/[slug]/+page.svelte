<script lang="ts">
  import { page } from '$app/stores';
  import { universityModules, certifications } from '$lib/skillsData';
  // Import Types
  import type { UniversityModule, Certification } from '$lib/skillsData';
  import ThreeBackground from '$lib/ThreeBackground.svelte';

  // Get URL Params
  $: type = $page.params.type;
  $: slug = $page.params.slug;

  // Define the item variable which can be one of our interfaces or undefined
  let item: UniversityModule | Certification | undefined;

  // Logic to find the item
  $: item = type === 'uni' 
    ? universityModules.find((m) => m.code === slug)
    : certifications.find((c) => c.id === slug);
</script>

<ThreeBackground />

<div class="center-wrapper">
  <div class="modal">
    <a href="/" class="close-btn">× Close</a>

    {#if item}
      <div class="header-meta">
        {#if type === 'uni'}
          <span class="tag gold">University Module • {(item as UniversityModule).code}</span>
        {:else}
          <span class="tag green">Certification • {item.issuer}</span>
        {/if}
      </div>

      <h1>{item.title}</h1>
      <div class="divider"></div>

      <p class="description">{item.description}</p>

      {#if 'tags' in item && item.tags}
        <div class="tags-container">
          {#each item.tags as tag}
            <span class="pill">#{tag}</span>
          {/each}
        </div>
      {/if}

      <a href="/" class="back-link">← Back to Dashboard</a>

    {:else}
      <h1>Skill Not Found</h1>
      <a href="/">Go Home</a>
    {/if}
  </div>
</div>

<style>
  /* Same CSS as before */
  .center-wrapper { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 1rem; }
  .modal { background: rgba(15, 23, 42, 0.95); border: 1px solid var(--border-color); padding: 3rem; border-radius: 12px; max-width: 700px; width: 100%; position: relative; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
  .close-btn { position: absolute; top: 1.5rem; right: 1.5rem; color: var(--text-muted); font-size: 0.9rem; }
  .close-btn:hover { color: var(--text-main); }
  .header-meta { margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px; font-size: 0.8rem; font-family: monospace; }
  .tag.gold { color: var(--accent-gold); }
  .tag.green { color: var(--accent-green); }
  h1 { font-size: 2.5rem; margin: 0 0 1.5rem 0; line-height: 1.1; }
  .divider { height: 2px; width: 60px; background: var(--border-color); margin-bottom: 2rem; }
  .description { font-size: 1.1rem; line-height: 1.6; color: #cbd5e1; margin-bottom: 2rem; }
  .tags-container { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2rem; }
  .pill { background: var(--border-color); padding: 5px 12px; border-radius: 20px; font-size: 0.85rem; color: var(--text-muted); }
  .back-link { color: var(--accent-gold); font-weight: bold; border-bottom: 1px solid transparent; }
  .back-link:hover { border-bottom-color: var(--accent-gold); }
</style>