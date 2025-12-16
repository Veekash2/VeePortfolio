<script lang="ts">
  import ThreeBackground from '$lib/ThreeBackground.svelte';
  // Import data
  import { universityModules, certifications } from '$lib/skillsData';
  
  // Define a type for the tab state
  type Tab = 'university' | 'licenses';
  let activeTab: Tab = 'university'; 
</script>

<ThreeBackground />

<main class="container">
  <header class="hero">
    <h1>Veekash Singh</h1>
    <p>Software Engineer | BSc Graduate | SRE Enthusiast</p>
  </header>

  <div class="tabs">
    <button 
      class:active={activeTab === 'university'} 
      on:click={() => activeTab = 'university'}>
      University Degrees
    </button>
    <button 
      class:active={activeTab === 'licenses'} 
      on:click={() => activeTab = 'licenses'}>
      Licenses & Certifications
    </button>
  </div>

  <div class="grid">
    
    {#if activeTab === 'university'}
      {#each universityModules as module}
        <a href={`/skill/uni/${module.code}`} class="card uni-card">
          <span class="code">{module.code}</span>
          <h3>{module.title}</h3>
          <p>{module.level}</p>
        </a>
      {/each}
    {/if}

    {#if activeTab === 'licenses'}
      {#each certifications as cert}
        <a href={`/skill/cert/${cert.id}`} class="card cert-card">
          <div class="cert-header">
            <span class="badge">Active License</span>
            <span class="date">{cert.date}</span>
          </div>
          <h3>{cert.title}</h3>
          <p>{cert.issuer}</p>
        </a>
      {/each}
    {/if}

  </div>
</main>

<style>
  /* Same CSS as before */
  .container { max-width: 1000px; margin: 0 auto; padding: 4rem 1rem; }
  .hero { text-align: center; margin-bottom: 4rem; }
  .hero h1 { font-size: 3.5rem; margin-bottom: 0.5rem; letter-spacing: -1px; }
  .hero p { font-size: 1.2rem; color: var(--text-muted); }

  .tabs { display: flex; justify-content: center; gap: 2rem; margin-bottom: 3rem; border-bottom: 1px solid var(--border-color); }
  .tabs button { background: none; border: none; color: var(--text-muted); font-size: 1.1rem; padding: 1rem 2rem; cursor: pointer; border-bottom: 2px solid transparent; transition: all 0.3s ease; }
  .tabs button:hover { color: var(--text-main); }
  .tabs button.active { color: var(--accent-gold); border-bottom-color: var(--accent-gold); }

  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
  .card { background: var(--bg-card); backdrop-filter: blur(10px); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 8px; transition: transform 0.2s, border-color 0.2s; display: block; }
  .card:hover { transform: translateY(-5px); border-color: var(--accent-gold); }
  .card h3 { margin: 0.5rem 0; font-size: 1.25rem; }
  .card p { color: var(--text-muted); font-size: 0.9rem; margin: 0; }

  .uni-card .code { font-family: monospace; color: var(--accent-gold); display: block; margin-bottom: 0.5rem; }
  .cert-header { display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.8rem; }
  .badge { background: rgba(16, 185, 129, 0.2); color: var(--accent-green); padding: 2px 8px; border-radius: 4px; }
  .cert-card:hover { border-color: var(--accent-green); }
</style>