<script>
    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<div class="w-full flex-col justify-center items-center flex relative mt-[2em] mb-[5em]">
    <div class="w-full mt-10 mx-3.5">
        <form id="form-Contact" name="form-Contact" data-name="Contact" method="POST" aria-label="Contact">
            <div class="md:mx-0 before:content-['_'] before:table" style="grid-area: 1/1/2/2">
                <div class="pl-0 w-full float-left min-h-[1px] relative sm:pr-2.5 w-col-6 md:inset-x-auto sm:w-6/12">
                    <div class="text-field-wrapper _1">
                        <label for="First-Name"
                               class="block lowercase text-base font-normal mb-2.5 text-white text-left">First
                            Name*</label>
                        <input style="font-family: Work Sans; font-weight: 500;" type="text"
                               class="outline-none text-white bg-transparent rounded pl-3 border-[3px] w-full h-[38px] align-middle text-sm leading-[1.42857] block mb-6 px-3 py-2 border-solid border-[#ccc] focus:border-[#3898ec]"
                               maxlength="256" name="First-Name" data-name="First Name" placeholder="" id="First-Name"
                               required/>
                    </div>
                </div>
                <div class="pr-0 sm:pl-2.5 float-left min-h-[1px] relative w-col-6 w-full md:inset-x-auto sm:w-6/12">
                    <div class="text-field-wrapper _2">
                        <label for="Last-Name"
                               class="block lowercase text-base font-normal mb-2.5 text-white text-left">Last
                            Name</label>
                        <input style="font-family: Work Sans; font-weight: 500;" type="text"
                               class="outline-none text-white bg-transparent rounded pl-3 border-[3px] w-full h-[38px] align-middle text-sm leading-[1.42857] block mb-6 px-3 py-2 border-solid border-[#ccc] focus:border-[#3898ec]"
                               maxlength="256" name="Last-Name" data-name="Last Name" placeholder="" id="Last-Name"/>
                    </div>
                </div>
            </div>
            <div class="text-field-wrapper _3">
                <label for="Email"
                       class="block lowercase text-base font-normal mb-2.5 text-white text-left">E-Mail*</label>
                <input style="font-family: Work Sans; font-weight: 500;" type="email"
                       class="outline-none text-white bg-transparent rounded pl-3 border-[3px] w-full h-[38px] align-middle text-sm leading-[1.42857] block mb-6 px-3 py-2 border-solid border-[#ccc] focus:border-[#3898ec]"
                       maxlength="256" name="Email" data-name="Email" placeholder="" id="Email" required/>
            </div>
            <div class="text-field-wrapper">
                <label for="Message"
                       class="block lowercase text-base font-normal mb-2.5 text-white text-left">Message*</label>
                <textarea style="font-family: Work Sans; font-weight: 500;" id="Message" name="Message" maxlength="5000"
                          data-name="Message" placeholder="" required
                          class="text-white bg-transparent rounded pl-3 border-[3px] w-full align-middle text-sm leading-[1.42857] block mb-6 px-3 py-2 border-solid border-[#ccc] focus:border-[#3898ec] outline-none h-[200px] overflow-visible"></textarea>
            </div>
            <input
                    type="submit"
                    value="Submit"
                    data-wait="Please wait..."
                    class="outline-none cursor-pointer gap-2.5 mix-blend-exclusion justify-center items-center no-underline p-0 rounded-[40px] w-auto h-auto text-center object-none bg-transparent border text-base font-medium inline-block mt-4 px-8 py-4 border-solid border-white transition-colors duration-500 ease-in-out hover:bg-white hover:text-black"
            />
        </form>
        <div class="bg-transparent text-center  {form?.success ? 'bg-[#ddd]' : 'bg-[#ffdede]'} mt-2.5 p-2.5"
             tabindex="-1" role="region">
            {#if form}
                {#if form?.success}
                    <p aria-label="Contact success">Thank you! Your submission has been received!</p>
                {:else }
                    <p class="text-[rgba(255,0,0,0.8)]" aria-label="Contact failure">
                        Something went wrong!&nbsp;Try again or use my E-Mail: <a
                            href="mailto:beaudelaire.dev@gmail.com"
                            class="text-[1.5em] no-underline text-white hover:text-amber-50"><span>Beaudelaire.dev@gmail.com</span></a>
                    </p>
                {/if}
            {/if}
        </div>
    </div>
</div>