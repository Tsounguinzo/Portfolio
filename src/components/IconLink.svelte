<script>
    export let title = '';
    export let href = '';
    export let iconPath = '';
    export let linkText = '';
</script>

<div class="col-span-4">
    <a title={title} href={href}>
        <div class="flex flex-col items-center justify-center w-full h-32 space-y-2 transition duration-100 rounded-lg group ring-gray-800 hover:text-gray-100">
      <span class="transition duration-300 ease-in-out group-hover:scale-125 group-hover:translate-y-3">
        <svg class="remixicon-icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d={iconPath}/>
        </svg>
      </span>
            <span class="text-center transition duration-500 ease-in-out group-hover:translate-y-3 group-hover:opacity-0 group-hover:scale-90">
        {linkText}
      </span>
        </div>
    </a>
</div>
