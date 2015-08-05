initSidebarItems({"constant":[["BASE_PAGE_SIZE",""],["CACHE_LINE_SIZE",""],["HUGE_PAGE_SIZE",""],["LARGE_PAGE_SIZE",""],["MAXPHYADDR","MAXPHYADDR, which is at most 52; (use CPUID for finding system value)."],["PDPT_A","/// Accessed; if PDPT_PS set indicates whether software has accessed the 1-GByte page /// else indicates whether this entry has been used for linear-address translation"],["PDPT_D","/// Dirty; if PDPT_PS indicates whether software has written to the 1-GByte page referenced by this entry. /// else ignored."],["PDPT_G","/// Global; if PDPT_PS && CR4.PGE = 1, determines whether the translation is global; ignored otherwise /// if not PDPT_PS this is ignored."],["PDPT_P","/// Present; must be 1 to map a 1-GByte page or reference a page directory."],["PDPT_PAT","/// Indirectly determines the memory type used to access the 1-GByte page referenced by this entry."],["PDPT_PCD","/// Page-level cache disable."],["PDPT_PS","/// Page size; if set this entry maps a 1-GByte page; otherwise, this entry references a page directory. /// if not PDPT_PS this is ignored."],["PDPT_PWT","/// Page-level write-through."],["PDPT_RW","/// Read/write; if 0, writes may not be allowed to the 1-GByte region controlled by this entry"],["PDPT_US","/// User/supervisor; user-mode accesses are not allowed to the 1-GByte region controlled by this entry."],["PDPT_XD","/// If IA32_EFER.NXE = 1, execute-disable /// If 1, instruction fetches are not allowed from the 512-GByte region."],["PD_A","/// Accessed; if PD_PS set indicates whether software has accessed the 2-MByte page /// else indicates whether this entry has been used for linear-address translation"],["PD_D","/// Dirty; if PD_PS indicates whether software has written to the 2-MByte page referenced by this entry. /// else ignored."],["PD_G","/// Global; if PD_PS && CR4.PGE = 1, determines whether the translation is global; ignored otherwise /// if not PD_PS this is ignored."],["PD_P","/// Present; must be 1 to map a 2-MByte page or reference a page table."],["PD_PAT","/// Indirectly determines the memory type used to access the 2-MByte page referenced by this entry. /// if not PD_PS this is ignored."],["PD_PCD","/// Page-level cache disable."],["PD_PS","/// Page size; if set this entry maps a 2-MByte page; otherwise, this entry references a page directory."],["PD_PWT","/// Page-level write-through."],["PD_RW","/// Read/write; if 0, writes may not be allowed to the 2-MByte region controlled by this entry"],["PD_US","/// User/supervisor; user-mode accesses are not allowed to the 2-MByte region controlled by this entry."],["PD_XD","/// If IA32_EFER.NXE = 1, execute-disable /// If 1, instruction fetches are not allowed from the 512-GByte region."],["PML4_A","/// Accessed; indicates whether this entry has been used for linear-address translation."],["PML4_P","/// Present; must be 1 to reference a page-directory-pointer table"],["PML4_PCD","/// Page-level cache disable; indirectly determines the memory type used to /// access the page-directory-pointer table referenced by this entry."],["PML4_PWT","/// Page-level write-through; indirectly determines the memory type used to /// access the page-directory-pointer table referenced by this entry."],["PML4_RW","/// Read/write; if 0, writes may not be allowed to the 512-GByte region /// controlled by this entry (see Section 4.6)"],["PML4_US","/// User/supervisor; if 0, user-mode accesses are not allowed /// to the 512-GByte region controlled by this entry."],["PML4_XD","/// If IA32_EFER.NXE = 1, execute-disable /// If 1, instruction fetches are not allowed from the 512-GByte region."],["PT_A","/// Accessed; indicates whether software has accessed the 4-KByte page"],["PT_D","/// Dirty; indicates whether software has written to the 4-KByte page referenced by this entry."],["PT_G","/// Global; if CR4.PGE = 1, determines whether the translation is global (see Section 4.10); ignored otherwise"],["PT_P","/// Present; must be 1 to map a 4-KByte page."],["PT_PCD","/// Page-level cache disable."],["PT_PWT","/// Page-level write-through."],["PT_RW","/// Read/write; if 0, writes may not be allowed to the 4-KByte region controlled by this entry"],["PT_US","/// User/supervisor; user-mode accesses are not allowed to the 4-KByte region controlled by this entry."],["PT_XD","/// If IA32_EFER.NXE = 1, execute-disable /// If 1, instruction fetches are not allowed from the 512-GByte region."]],"fn":[["pd_index","Given virtual address calculate corresponding entry in PD."],["pdpt_index","Given virtual address calculate corresponding entry in PDPT."],["pml4_index","Given virtual address calculate corresponding entry in PML4."],["pt_index","Given virtual address calculate corresponding entry in PT."]],"struct":[["PDEntry",""],["PDPTEntry",""],["PML4Entry",""],["PTEntry",""]],"type":[["PAddr",""],["PD","A page directory."],["PDPT","A page directory pointer table."],["PML4","A PML4 table. In practice this has only 4 entries but it still needs to be the size of a 4K page."],["PT","A page table."],["VAddr",""]]});